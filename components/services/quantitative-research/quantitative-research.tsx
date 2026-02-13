'use client';

import { AlignLeft, ChevronLeft, GalleryVerticalEnd, Lightbulb, ListChecks, RefreshCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from "@/components/ui/blur-fade";

const QuantitativeResearch = () => {
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
                                <Badge variant="outline">Statistical Methodologies</Badge>
                                <h1 className="mt-3 text-3xl font-extrabold">Quantitative Research</h1>
                                <p className="mt-2 text-lg text-muted-foreground">
                                    Our quantitative research utilizes mathematical and statistical modeling to provide 
                                    measurable, objective data. We focus on scale, representativeness, and the 
                                    identification of significant trends across broad populations.
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
                                <h2>Data Collection Infrastructure</h2>
                                <div className="ml-3.5">
                                    <div className="relative flex items-start pb-2">
                                        <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                        <div className="absolute ml-[-14px] py-2">
                                            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                                <RefreshCcw className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                        <div className="pl-12">
                                            <h3 className="mt-2 text-base font-semibold">Automated Survey Logic</h3>
                                            <p>
                                                We utilize advanced skip-logic and branching within our survey instruments 
                                                to ensure high data quality and a streamlined respondent experience across 
                                                all digital platforms.
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
                                            <h3 className="mt-2 text-base font-semibold">Sampling Stratification</h3>
                                            <p>
                                                To achieve representative results, we employ stratified random sampling, 
                                                ensuring that key sub-groups within the population are accurately 
                                                represented in the final dataset.
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
                                            <h3 className="mt-2 text-base font-semibold">Rigorous Data Validation</h3>
                                            <p>
                                                Every response undergoes automated and manual cleaning processes to remove 
                                                outliers, duplicates, and "straight-lining" behavior, ensuring 
                                                statistical integrity.
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
                                <h2>Statistical Significance</h2>
                                <p>
                                    Our analysis provides a clear picture of public sentiment by calculating confidence 
                                    intervals and margins of error, allowing for precise decision-making.
                                </p>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Sample Size (N)</th>
                                                <th>Margin of Error</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>400 Participants</td>
                                                <td>+/- 4.9%</td>
                                            </tr>
                                            <tr className="m-0 border-t p-0 even:bg-muted">
                                                <td>1,000 Participants</td>
                                                <td>+/- 3.1%</td>
                                            </tr>
                                            <tr className="m-0 border-t p-0 even:bg-muted">
                                                <td>2,000 Participants</td>
                                                <td>+/- 2.2%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    By reaching these statistical benchmarks, we provide our clients with the 
                                    confidence that their findings truly reflect the broader landscape, reducing 
                                    risk and identifying clear opportunities.
                                </p>
                                <Alert>
                                    <Lightbulb className="h-4 w-4" />
                                    <AlertTitle>Statistical Tip</AlertTitle>
                                    <AlertDescription>
                                        Higher sample sizes reduce the margin of error, but professional weighting 
                                        is often required to correct for demographic imbalances.
                                    </AlertDescription>
                                </Alert>
                            </section>

                            {/* SECTION 3 */}
                            <section
                                id="section3"
                                ref={(ref) => addSectionRef('section3', ref)}
                                className="prose mb-8 scroll-mt-32 dark:prose-invert"
                            >
                                <h2>The Project Lifecycle</h2>
                                <p>
                                    We follow a structured <a href="#">Quantitative Framework</a> to move from 
                                    initial hypothesis to final data visualization without losing precision.
                                </p>
                                <blockquote>
                                    &ldquo;Numbers tell a story that personal anecdotes cannot reach; they 
                                    provide the evidence-based foundation for large-scale change.&rdquo;
                                </blockquote>
                                <p>Our quantitative projects typically move through these core stages:</p>
                                <ul>
                                    <li>Variable Identification & Hypothesis Testing</li>
                                    <li>CATI (Computer Assisted Telephone) or Online Fieldwork</li>
                                    <li>Regression Analysis & Correlation Discovery</li>
                                </ul>
                                <p>
                                    This data-first approach allows us to deliver hard metrics that track 
                                    performance, measure impact, and predict future trends with mathematical accuracy.
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
                                            Data Infrastructure
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
                                            Statistical Significance
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
                                            Project Lifecycle
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

export default QuantitativeResearch;