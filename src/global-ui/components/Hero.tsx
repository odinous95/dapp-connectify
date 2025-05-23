import React from 'react';
import { heroDetails } from '@/data/hero';

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 md:pt-40 px-5 min-h-screen"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-6/12">
                <div className="absolute inset-0 h-full bg-hero-background bg-[linear-gradient(to_top,#80808012_1px,transparent_1px),linear-gradient(to_right,#38bdf8_2px,transparent_1px)] bg-[size:30px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_100%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="text-center">
                <h1 className="backdrop-blur-[2px] bg-gradient-to-b text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto backdrop-blur-[2px] bg-gradient-to-b">{heroDetails.subheading}</p>
            </div>
        </section>
    );
};
