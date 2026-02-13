"use client";

import AutoScroll from 'embla-carousel-auto-scroll';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { BlurFade } from "@/components/ui/blur-fade";

interface Logo {
    id: string;
    description: string;
    image: string;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    description?: string;
    logos?: Logo[];
    className?: string;
}

const Logos = ({
    heading = 'Trusted by Corporations and Government Agencies',
    description = 'Our research frameworks have supported strategic initiatives across the public and private sectors for over a decade.',
    logos = [
        {
        id: 'logo-1',
        description: 'Gov Logo 1',
        image: '/images/gov-logo/gov-logo3.png',
        className: 'h-60 w-auto object-contain', 
        },
        {
            id: 'logo-2',
            description: 'Gov Logo 2',
            image: '/images/gov-logo/gov-logo3.png',
            className: 'h-60 w-auto object-contain',
        },
        {
            id: 'logo-3',
            description: 'Gov Logo 3',
            image: '/images/gov-logo/gov-logo3.png',
            className: 'h-60 w-auto object-contain', 
        },
        {
            id: 'logo-4',
            description: 'Logo 4',
            image: '/images/gov-logo/gov-logo3.png',
            className: 'h-60 w-auto',
        },
        {
            id: 'logo-5',
            description: 'Logo 5',
            image: '/images/gov-logo/gov-logo3.png',
            className: 'h-60 w-auto',
        },
        {
            id: 'logo-6',
            description: 'Logo 6',
            image: '/images/gov-logo/gov-logo3.png',
            className: 'h-60 w-auto',
        },
        {
            id: 'logo-7',
            description: 'Logo 7',
            image: '/images/gov-logo/gov-logo3.png',
            className: 'h-60 w-auto',
        },
        {
            id: 'logo-8',
            description: 'Logo 8',
            image: '/images/gov-logo/gov-logo3.png',
            className: 'h-60 w-auto',
        },
    ],
}: Logos3Props) => {
    return (
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container flex flex-col items-center text-center">
                <div className="mx-auto mb-4 max-w-3xl text-center">
                    <BlurFade delay={0.25} inView>
                    <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                        {heading}
                    </h2>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2} inView>
                    <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
                        {description}
                    </p>
                    </BlurFade>
                </div>
            </div>
            <div className="pt-10 md:pt-16 lg:pt-20">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl">
                    <BlurFade delay={0.25 * 2} inView>
                    <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
                        <CarouselContent className="ml-0">
                            {logos.map((logo) => (
                                <CarouselItem 
                                    key={logo.id}
                                    className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/4"
                                >
                                    <div className="flex shrink-0 items-center justify-center px-12 py-4">
                                        <img 
                                            src={logo.image} 
                                            alt={logo.description} 
                                            className={logo.className} 
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    </BlurFade>
                    <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export default Logos;