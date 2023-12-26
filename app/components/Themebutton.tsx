"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeButton() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        boxShadow: isHovered ? 'rgb(129, 140, 248) 0px 0px 0px 0px' : 'rgb(129, 140, 248) 6px 5px 0px 0px',
        transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
        transform: isHovered ? 'scale(1.10)' : 'scale(1)',
    }



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="group relative inline-block hover:cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}> 
            <button 
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="relative z-10 bg-indigo-100 border border-black p-2 rounded-lg dark:bg-slate-800 dark:border-white"
                style={buttonStyle}
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