"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Themebutton() {
    const {setTheme, resolvedTheme} = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);

    {!mounted && null};

    return (
        <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="bg-teal-500/30 p-2 rounded-lg tex-teal-500">
            {resolvedTheme === 'dark' ? (
                '🌤️'
            ): '🌙'}
        </button>
    )
}