import React from 'react';
import { heroDetails } from '@/data/hero';
import Image from 'next/image';

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
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-1/2 h-full">
                <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_left,#87ceeb12_1px,transparent_1px),linear-gradient(to_bottom,#87ceeb_1px,transparent_1px)] bg-[size:40px_30px] [mask-image:radial-gradient(ellipse_70%_100%_at_10%_100%,#000_10%,transparent_100%)]">
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <div className="text-center md:text-left flex-1">
                    <h1 className="backdrop-blur-[2px] bg-gradient-to-b text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto md:mx-0">{heroDetails.heading}</h1>
                    <p className="mt-4 text-foreground max-w-lg mx-auto md:mx-0 backdrop-blur-[2px] bg-gradient-to-b">{heroDetails.subheading}</p>
                </div>
                <div className="flex-1 flex justify-center mt-8 md:mt-0">
                    <Image
                        src="/hero.png"
                        alt="Hero"
                        width={400}
                        height={400}
                        className="max-w-xs md:max-w-md w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};
