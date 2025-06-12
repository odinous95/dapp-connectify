"use client";
import { useTheme } from "next-themes";

export function ThemeToggler() {
    const { resolvedTheme, setTheme } = useTheme();
    return (
        <>
            <button
                aria-label='theme toggler'
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex items-center mx-4 justify-center rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
            >
                {resolvedTheme === "dark" ? (
                    // Sun with rays for light mode
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="6" fill="#FFD600" />
                        <g stroke="#FFD600" strokeWidth="2">
                            <line x1="14" y1="2" x2="14" y2="6" />
                            <line x1="14" y1="22" x2="14" y2="26" />
                            <line x1="2" y1="14" x2="6" y2="14" />
                            <line x1="22" y1="14" x2="26" y2="14" />
                            <line x1="5.1" y1="5.1" x2="8" y2="8" />
                            <line x1="20" y1="20" x2="22.9" y2="22.9" />
                            <line x1="5.1" y1="22.9" x2="8" y2="20" />
                            <line x1="20" y1="8" x2="22.9" y2="5.1" />
                        </g>
                    </svg>
                ) : (
                    // Crescent moon for dark mode
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path
                            d="M21 14.5C21 18.6421 17.6421 22 13.5 22C11.4067 22 9.49999 21.1046 8.09099 19.6956C12.5 20 18 16 18 9C19.6569 10.3431 21 12.2745 21 14.5Z"
                            fill="#FFD600"
                        />
                    </svg>
                )}
            </button>
        </>
    );
}
