"use client";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggler() {
    const { resolvedTheme, setTheme } = useTheme();
    if (!resolvedTheme) return null;
    return (
        <button
            aria-label='theme toggler'
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex items-center mx-4 justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
        >
            {resolvedTheme === "dark" ? (
                <FaMoon size={24} color="#fff" />
            ) : (
                <FaSun size={24} color="#000" />
            )}
        </button>
    );
}
