"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="group relative inline-block hover:cursor-pointer"> 
            <div className="absolute top-1 left-1 -right-1 -bottom-1 bg-indigo-500 rounded-lg transition-all duration-100 group-hover:top-0 group-hover:left-0 group-hover:right-0 group-hover:bottom-0"> 
            </div>
            <button 
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="relative z-10 bg-slate-400 border border-gray p-2 rounded-lg"
            >
                {resolvedTheme === 'dark' ? (
                    <span className="text-xl">🌤️</span>
                ) : (
                    <span className="text-xl">🌙</span>
                )}
            </button>
        </div>
    );
}