'use client';
import React from 'react';
import { Logo } from './logo';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Container } from './container';
import { ThemeToggler } from './ToggleTheme';

export function Header() {
    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 z-50 w-full">
            <Container>
                <nav className="backdrop-blur-[2px] p-2 bg-gradient-to-b shadow-md md:shadow-none md:bg-transparent flex justify-between items-center">
                    {/* Logo and Site Name */}
                    <Logo />
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <ConnectButton label="Connect" />
                        <ThemeToggler />
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <ConnectButton label="Connect" />
                        <ThemeToggler />
                    </div>
                </nav>
            </Container>
        </header>
    );
}
