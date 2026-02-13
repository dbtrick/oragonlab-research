'use client';

import { AlignLeft, ChevronLeft, GalleryVerticalEnd, Lightbulb, ListChecks, RefreshCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from "@/components/ui/blur-fade";

const StrategicConsulting = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement>>({});

    useEffect(() => {
        const sections = Object.keys(sectionRefs.current);

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '-120px 0px -60% 0px',
            threshold: 0,
        });

        sections.forEach((sectionId) => {
            const element = sectionRefs.current[sectionId];
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const addSectionRef = (id: string, ref: HTMLElement | null) => {
        if (ref) sectionRefs.current[id] = ref;
    };

    return (
            <section className="py-32">
                <BlurFade delay={0.25} inView>
                <div className="container max-w-7xl">
                    <div className="relative grid-cols-3 gap-20 lg:grid">
                        <div className="lg:col-span-2">
                            {/* INTRO */}
                            <div>
                                <Badge variant="outline">Enterprise Growth</Badge>
                                <h1 className="mt-3 text-3xl font-extrabold">Strategic Consulting</h1>
                                <p className="mt-2 text-lg text-muted-foreground">
                                    Navigate complexity with clarity. Our strategic consulting services bridge the gap 
                                    between high-level vision and tactical execution, helping organizations adapt to 
                                    rapidly shifting market dynamics and technological disruption.
                                </p>
                                <img
                                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                                    alt="consulting presentation"
                                    className="my-8 aspect-video w-full rounded-md object-cover"
                                />
                            </div>

                            {/* SECTION 1 */}
                            <section
                                id="section1"
                                ref={(ref) => addSectionRef('section1', ref)}
                                className="prose mb-8 scroll-mt-32 dark:prose-invert"
                            >
                                <h2>The Consulting Framework</h2>
                                <div className="ml-3.5">
                                    <div className="relative flex items-start pb-2">
                                        <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                        <div className="absolute ml-[-14px] py-2">
                                            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                                <RefreshCcw className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                        <div className="pl-12">
                                            <h3 className="mt-2 text-base font-semibold">Discovery & Audit</h3>
                                            <p>
                                                We begin by dissecting your current operational workflows and market position. 
                                                By identifying hidden bottlenecks and untapped assets, we create a 
                                                comprehensive baseline for future growth.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start pb-2">
                                        <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                        <div className="absolute ml-[-14px] py-2">
                                            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                                <GalleryVerticalEnd className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                        <div className="pl-12">
                                            <h3 className="mt-2 text-base font-semibold">Strategic Roadmapping</h3>
                                            <p>
                                                Strategy without a timeline is just a wish. We develop phased implementation 
                                                plans that prioritize high-impact wins while building the foundation for 
                                                long-term scalability.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start pb-2">
                                        <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                        <div className="absolute ml-[-14px] py-2">
                                            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                                <ListChecks className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                        <div className="pl-12">
                                            <h3 className="mt-2 text-base font-semibold">Change Management</h3>
                                            <p>
                                                The hardest part of any strategy is the human element. We guide your teams 
                                                through transitions, ensuring culture evolves alongside your business 
                                                processes and tech stack.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 2 */}
                            <section
                                id="section2"
                                ref={(ref) => addSectionRef('section2', ref)}
                                className="prose mb-8 scroll-mt-32 dark:prose-invert"
                            >
                                <h2>Market Impact Analysis</h2>
                                <p>
                                    Our recommendations are backed by rigorous quantitative modeling. We measure 
                                    the potential ROI of strategic shifts before you commit significant capital.
                                </p>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Strategic Focus</th>
                                                <th>Projected Efficiency Gain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Process Automation</td>
                                                <td>35% - 45%</td>
                                            </tr>
                                            <tr className="m-0 border-t p-0 even:bg-muted">
                                                <td>Digital Transformation</td>
                                                <td>20% Revenue Uplift</td>
                                            </tr>
                                            <tr className="m-0 border-t p-0 even:bg-muted">
                                                <td>Market Expansion</td>
                                                <td>Varies by Sector</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    By aligning your internal capabilities with external market opportunities, 
                                    we ensure your organization doesn&apos;t just react to change, but defines it.
                                </p>
                                <Alert>
                                    <Lightbulb className="h-4 w-4" />
                                    <AlertTitle>Strategy Insight</AlertTitle>
                                    <AlertDescription>
                                        The most successful companies don&apos;t out-compete on features; they 
                                        out-position on value. Always lead with the &quot;Why.&quot;
                                    </AlertDescription>
                                </Alert>
                            </section>

                            {/* SECTION 3 */}
                            <section
                                id="section3"
                                ref={(ref) => addSectionRef('section3', ref)}
                                className="prose mb-8 scroll-mt-32 dark:prose-invert"
                            >
                                <h2>The Implementation Plan</h2>
                                <p>
                                    True consulting doesn&apos;t end with a slide deck. We offer <a href="#">hands-on advisory</a> 
                                    to ensure that the strategies we propose are actually adopted and measured.
                                </p>
                                <blockquote>
                                    &ldquo;Strategy is about making choices, trade-offs; it&apos;s about deliberately 
                                    choosing to be different.&rdquo;
                                </blockquote>
                                <p>Our engagement model is built on transparency and accountability:</p>
                                <ul>
                                    <li>Bi-weekly performance reviews</li>
                                    <li>Executive alignment workshops</li>
                                    <li>Ongoing competitive intelligence monitoring</li>
                                </ul>
                                <p>
                                    From startups looking to find their footing to enterprises looking to pivot, 
                                    our consulting team provides the outside perspective necessary to unlock 
                                    next-level performance.
                                </p>
                            </section>
                        </div>

                        {/* TOC */}
                        <div className="sticky top-24 hidden h-fit lg:block">
                            <span className="flex items-center gap-2 text-sm">
                                <AlignLeft className="h-4 w-4" />
                                On this page
                            </span>
                            <nav className="mt-2 text-sm">
                                <ul>
                                    <li>
                                        <a
                                            href="#section1"
                                            className={cn(
                                                'block py-1 transition-colors duration-200',
                                                activeSection === 'section1'
                                                    ? 'font-medium text-primary'
                                                    : 'text-muted-foreground hover:text-primary',
                                            )}
                                        >
                                            Consulting Framework
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section2"
                                            className={cn(
                                                'block py-1 transition-colors duration-200',
                                                activeSection === 'section2'
                                                    ? 'font-medium text-primary'
                                                    : 'text-muted-foreground hover:text-primary',
                                            )}
                                        >
                                            Market Impact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section3"
                                            className={cn(
                                                'block py-1 transition-colors duration-200',
                                                activeSection === 'section3'
                                                    ? 'font-medium text-primary'
                                                    : 'text-muted-foreground hover:text-primary',
                                            )}
                                        >
                                            Implementation Plan
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                </BlurFade>
            </section>
    );
};

export default StrategicConsulting;