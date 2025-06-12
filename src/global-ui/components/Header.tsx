'use client';
import React from 'react';
import { Logo } from './logo';
import { ThemeToggler } from './ToggleTheme';
import { SignInWeb3 } from '@/features/auth/ui';

export function Header() {
    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 z-50 w-full">
            <nav className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100  shadow-md fixed top-0 left-0 right-0 w-full flex justify-between items-center transition-colors duration-300">
                {/* Logo and Site Name */}
                <Logo />
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    <SignInWeb3 />
                    <ThemeToggler />
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    {/* <ConnectButton label="Connect" /> */}
                    <ThemeToggler />
                </div>
            </nav>
        </header>
    );
}
