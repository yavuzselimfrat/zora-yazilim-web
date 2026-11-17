import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

// Match an explicit Markdown media type, excluding q=0.
const markdownRequest = [
  {
    type: "header" as const,
    key: "accept",
    value: "(?:.*,)?\\s*[tT][eE][xX][tT]/[mM][aA][rR][kK][dD][oO][wW][nN]\\s*(?![^,]*;\\s*[qQ]\\s*=\\s*0(?:\\.0*)?\\s*(?:;|,|$))(?:;[^,]*)?(?:,.*)?",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  reactCompiler: true,
  turbopack: {
    // Pin the project root to this folder. Without this, Turbopack can
    // walk up and pick a parent directory as the workspace root if it
    // finds a stray lockfile there, which breaks module resolution.
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      { source: "/about", destination: "/hakkimizda", permanent: true },
      { source: "/contact", destination: "/iletisim", permanent: true },
      { source: "/privacy", destination: "/gizlilik-politikasi", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", has: markdownRequest, destination: "/markdown/home" },
      ],
      afterFiles: [],
      fallback: [
        {
          source: "/:path((?!api(?:/|$)|admin(?:/|$)|_next(?:/|$)).+)",
          has: markdownRequest,
          destination: "/markdown/not-found",
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/",
        // Next.js replaces Vary on prerendered HTML. Require revalidation
        // so a cached HTML response cannot satisfy a Markdown request.
        headers: [{ key: "Cache-Control", value: "private, no-store" }],
      },
    ];
  },
};

export default nextConfig;
