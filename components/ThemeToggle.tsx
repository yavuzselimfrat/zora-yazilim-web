"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Işık/karanlık bilinene kadar düzeni kaydırmayan sabit boyutlu bir yer tutucu.
        return <div className="w-9 h-9" aria-hidden="true" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-foreground/[0.04] hover:bg-foreground/[0.07] border border-foreground/10 text-foreground/70 transition-colors duration-200 cursor-pointer"
            aria-label="Tema değiştir"
        >
            {theme === "dark" ? (
                <Sun className="w-4 h-4" />
            ) : (
                <Moon className="w-4 h-4" />
            )}
        </button>
    );
}
