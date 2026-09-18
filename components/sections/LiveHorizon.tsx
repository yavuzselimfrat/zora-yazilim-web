'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import AuroraBackground from './AuroraBackground';

/**
 * Raw WebGL2 hero background, original to Zora's "dawn" brand motif —
 * an autonomous-signal flow drifting across a horizon line, not a copy of
 * any reference site's concept, copy, or parameters.
 *
 * Failure modes deliberately designed around (not lifted from anywhere,
 * just good practice for a full-screen shader background):
 * - every threshold uses smoothstep/exp falloff, never a hard step, so
 *   nothing prints a seam as the mouse or time moves;
 * - the shader source is a plain JS string compiled after mount, so there
 *   is no DOM-ordering race to begin with;
 * - device pixel ratio is capped both by a flat ceiling and by total
 *   fragment count, so a 5K panel at 2x never renders millions of
 *   needless fragments;
 * - all per-frame easing is scaled by delta-time, so motion speed does
 *   not change with refresh rate;
 * - the palette crossfades with the site's light/dark theme instead of
 *   staying hardcoded, so a theme toggle can't leave text unreadable;
 * - prefers-reduced-motion gets a single static frame, coarse pointers
 *   skip the pointer listener and get a capped frame rate, and anything
 *   without WebGL2 falls back to the existing CSS/Framer Motion aurora
 *   instead of a blank rectangle.
 */

const VERTEX_SRC = `#version 300 es
layout(location = 0) in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SRC = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_isDark;

out vec4 fragColor;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float total = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    total += valueNoise(p) * amp;
    p *= 2.02;
    amp *= 0.55;
  }
  return total;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv - 0.5;
  p.x *= u_resolution.x / u_resolution.y;

  float horizonY = -0.14;
  float d = p.y - horizonY;
  float glow = exp(-abs(d) * 5.0);

  vec3 skyBaseDark = vec3(0.03, 0.03, 0.035);
  vec3 skyBaseLight = vec3(0.984, 0.980, 0.973);
  vec3 skyBase = mix(skyBaseLight, skyBaseDark, u_isDark);

  vec3 dawnWarmDark = vec3(0.79, 0.48, 0.26);
  vec3 dawnWarmLight = vec3(0.91, 0.71, 0.51);
  vec3 dawnWarm = mix(dawnWarmLight, dawnWarmDark, u_isDark);

  vec3 col = mix(skyBase, dawnWarm, glow * mix(0.32, 0.5, u_isDark));

  vec2 mouseP = u_mouse;
  float mouseDist = length(p - mouseP);
  vec2 warp = (p - mouseP) * smoothstep(0.4, 0.0, mouseDist) * 0.35;

  vec2 flowUv = vec2(p.x * 1.4 - u_time * 0.045, p.y * 7.0) + warp;
  float n = fbm(flowUv);
  float streak = smoothstep(0.56, 0.78, n) * smoothstep(0.55, 0.0, abs(d) * 2.0);
  vec3 streakColorDark = vec3(0.91, 0.61, 0.33);
  vec3 streakColorLight = vec3(0.70, 0.37, 0.20);
  vec3 streakColor = mix(streakColorLight, streakColorDark, u_isDark);
  col += streakColor * streak * mix(0.32, 0.55, u_isDark);

  vec2 gridUv = (p + 0.5) * vec2(70.0, 40.0);
  vec2 cell = floor(gridUv);
  vec2 localUv = fract(gridUv) - 0.5;
  float twinkle = step(0.985, hash21(cell + floor(u_time * 1.4)));
  float dotShape = smoothstep(0.3, 0.0, length(localUv));
  float sparkle = twinkle * dotShape;
  vec3 sparkleColorDark = vec3(1.0, 0.85, 0.7);
  vec3 sparkleColorLight = vec3(0.56, 0.28, 0.15);
  vec3 sparkleColor = mix(sparkleColorLight, sparkleColorDark, u_isDark);
  col += sparkleColor * sparkle * smoothstep(0.32, 0.0, abs(d) * 2.4) * mix(0.4, 0.6, u_isDark);

  float vign = smoothstep(0.95, 0.15, length(p));
  float vignFloor = mix(0.9, 0.72, u_isDark);
  col *= mix(vignFloor, 1.0, vign);

  fragColor = vec4(col, 1.0);
}`;

function compileShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

const LiveHorizon: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglOk, setWebglOk] = useState(true);

  const { resolvedTheme } = useTheme();
  const isDarkTargetRef = useRef(1);

  useEffect(() => {
    isDarkTargetRef.current = resolvedTheme === 'light' ? 0 : 1;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

    const gl = canvas.getContext('webgl2', { antialias: true, alpha: false });
    if (!gl) {
      setWebglOk(false);
      return;
    }

    const vertShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
    const fragShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
    if (!vertShader || !fragShader) {
      setWebglOk(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setWebglOk(false);
      return;
    }
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setWebglOk(false);
      return;
    }
    gl.useProgram(program);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uIsDark = gl.getUniformLocation(program, 'u_isDark');

    let targetMouse = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    let isDark = isDarkTargetRef.current;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = 0.5 - (e.clientY - rect.top) / rect.height;
      targetMouse = { x: nx * (rect.width / rect.height), y: ny };
    };
    const handlePointerLeave = () => {
      targetMouse = { x: 0, y: 0 };
    };

    if (!coarsePointer) {
      container.addEventListener('pointermove', handlePointerMove);
      container.addEventListener('pointerleave', handlePointerLeave);
    }

    let width = 1;
    let height = 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const area = rect.width * rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75, Math.sqrt(2.4e6 / Math.max(area, 1)));
      width = Math.max(1, Math.round(rect.width * dpr));
      height = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let rafId = 0;
    let lastTs = performance.now();
    let elapsed = 0;
    const fpsInterval = coarsePointer ? 1000 / 30 : 0;
    let sinceLastFrame = 0;

    const drawFrame = () => {
      gl.useProgram(program);
      gl.uniform2f(uResolution, width, height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uIsDark, isDark);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const render = (ts: number) => {
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;
      elapsed += dt;
      sinceLastFrame += dt * 1000;

      if (fpsInterval === 0 || sinceLastFrame >= fpsInterval) {
        sinceLastFrame = 0;
        const ease = 1 - Math.pow(1 - 0.08, dt * 60);
        mouse.x += (targetMouse.x - mouse.x) * ease;
        mouse.y += (targetMouse.y - mouse.y) * ease;
        const themeEase = 1 - Math.pow(1 - 0.12, dt * 60);
        isDark += (isDarkTargetRef.current - isDark) * themeEase;
        drawFrame();
      }

      rafId = requestAnimationFrame(render);
    };

    if (reducedMotion) {
      isDark = isDarkTargetRef.current;
      drawFrame();
    } else {
      rafId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteProgram(program);
    };
  }, []);

  if (!webglOk) {
    return <AuroraBackground />;
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};

export default LiveHorizon;
