'use client';

import { AlignLeft, ChevronLeft, GalleryVerticalEnd, Lightbulb, ListChecks, RefreshCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from "@/components/ui/blur-fade";

const QualitativeResearch = () => {
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
            // offset for navbar height
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
                                <Badge variant="outline">Methodologies</Badge>
                                <h1 className="mt-3 text-3xl font-extrabold">Qualitative Research</h1>
                                <p className="mt-2 text-lg text-muted-foreground">
                                    Our qualitative research approach focuses on uncovering the underlying motivations, 
                                    attitudes, and beliefs that drive human behavior, providing depth and context 
                                    to complex social and policy issues.
                                </p>
                                <img
                                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                                    alt="placeholder"
                                    className="my-8 aspect-video w-full rounded-md object-cover"
                                />
                            </div>

                            {/* SECTION 1 */}
                            <section
                                id="section1"
                                ref={(ref) => addSectionRef('section1', ref)}
                                className="prose mb-8 scroll-mt-32 dark:prose-invert"
                            >
                                <h2>Primary Engagement Channels</h2>
                                <div className="ml-3.5">
                                    <div className="relative flex items-start pb-2">
                                        <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                        <div className="absolute ml-[-14px] py-2">
                                            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                                <RefreshCcw className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                        <div className="pl-12">
                                            <h3 className="mt-2 text-base font-semibold">In-Depth Interviews (IDIs)</h3>
                                            <p>
                                                One-on-one sessions designed to build rapport and explore personal narratives. 
                                                These interviews allow for granular exploration of individual experiences 
                                                and sensitive topics.
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
                                            <h3 className="mt-2 text-base font-semibold">Focus Groups & Workshops</h3>
                                            <p>
                                                Dynamic group discussions that leverage participant interaction to test 
                                                concepts, brainstorm solutions, and understand collective social norms.
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
                                            <h3 className="mt-2 text-base font-semibold">Observational Research</h3>
                                            <p>
                                                Immersive ethnographic studies where researchers observe participants in 
                                                real-world settings to understand natural behaviors and environmental 
                                                influences.
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
                                <h2>Analysis & Insight Delivery</h2>
                                <p>
                                    Our analysis process involves transforming raw conversational data into 
                                    structured insights through rigorous thematic coding and cross-case comparison.
                                </p>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Project Output</th>
                                                <th>Strategic Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Thematic Reports</td>
                                                <td>Comprehensive identification of key drivers.</td>
                                            </tr>
                                            <tr className="m-0 border-t p-0 even:bg-muted">
                                                <td>User Personas</td>
                                                <td>Detailed profiles of target audience behaviors.</td>
                                            </tr>
                                            <tr className="m-0 border-t p-0 even:bg-muted">
                                                <td>Journey Maps</td>
                                                <td>Visualization of the end-to-end user experience.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    This systematic approach ensures that findings are not just anecdotal, 
                                    but are grounded in evidence and ready for strategic implementation.
                                </p>
                                <Alert>
                                    <Lightbulb className="h-4 w-4" />
                                    <AlertTitle>Ethical Framework</AlertTitle>
                                    <AlertDescription>
                                        All qualitative engagements are conducted under strict privacy protocols 
                                        and informed consent guidelines to protect participant integrity.
                                    </AlertDescription>
                                </Alert>
                            </section>

                            {/* SECTION 3 */}
                            <section
                                id="section3"
                                ref={(ref) => addSectionRef('section3', ref)}
                                className="prose mb-8 scroll-mt-32 dark:prose-invert"
                            >
                                <h2>Research Philosophy</h2>
                                <p>
                                    We believe that every data point has a human story behind it. Our team 
                                    employs <a href="#">advanced facilitation techniques</a> to ensure 
                                    inclusive participation from diverse cohorts.
                                </p>
                                <blockquote>
                                    &ldquo;Qualitative research provides the essential context that quantitative 
                                    data alone cannot reach, answering the 'how' and 'why' of human choice.&rdquo;
                                </blockquote>
                                <p>Our specialized recruitment strategies target several key demographics:</p>
                                <ul>
                                    <li>Culturally and Linguistically Diverse (CALD) communities</li>
                                    <li>Regional and remote stakeholders</li>
                                    <li>Subject matter experts and industry leaders</li>
                                </ul>
                                <p>
                                    By bridging the gap between researcher and participant, we deliver 
                                    human-centric insights that drive effective policy and service design.
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
                                            Engagement Channels
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
                                            Analysis & Delivery
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
                                            Research Philosophy
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

export default QualitativeResearch;