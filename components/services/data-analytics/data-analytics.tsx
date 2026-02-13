'use client';

import { AlignLeft, ChevronLeft, GalleryVerticalEnd, Lightbulb, ListChecks, RefreshCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { BlurFade } from "@/components/ui/blur-fade";

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const DataAnalytics = () => {
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
                                <Badge variant="outline">Insights & Intelligence</Badge>
                                <h1 className="mt-3 text-3xl font-extrabold">Data Analytics</h1>
                                <p className="mt-2 text-lg text-muted-foreground">
                                    Transform raw information into actionable intelligence. Our analytics suite focuses on 
                                    advanced data modeling, pattern recognition, and real-time visualization to drive 
                                    strategic growth and operational efficiency.
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
                                <h2>The Analytics Pipeline</h2>
                                <div className="ml-3.5">
                                    <div className="relative flex items-start pb-2">
                                        <div className="absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px bg-border/70"></div>
                                        <div className="absolute ml-[-14px] py-2">
                                            <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted">
                                                <RefreshCcw className="h-3.5 w-3.5" />
                                            </div>
                                        </div>
                                        <div className="pl-12">
                                            <h3 className="mt-2 text-base font-semibold">ETL & Data Integration</h3>
                                            <p>
                                                We aggregate data from disparate sources—APIs, databases, and legacy systems—
                                                cleaning and normalizing the information to create a single, reliable 
                                                source of truth.
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
                                            <h3 className="mt-2 text-base font-semibold">Descriptive to Predictive</h3>
                                            <p>
                                                Beyond explaining what happened, our models utilize machine learning algorithms 
                                                to forecast future trends, identifying risks and opportunities before 
                                                they manifest.
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
                                            <h3 className="mt-2 text-base font-semibold">Key Performance Metrics</h3>
                                            <p>
                                                Define and track the KPIs that actually matter. We filter out the vanity metrics 
                                                to focus on core indicators of health, churn, and conversion.
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
                                <h2>Performance Benchmarks</h2>
                                <p>
                                    Effective data analytics isn't just about accuracy; it's about speed and the 
                                    granularity of the insights provided.
                                </p>
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Analysis Type</th>
                                                <th>Typical Latency</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Real-time Streaming</td>
                                                <td>&lt; 500ms</td>
                                            </tr>
                                            <tr className="m-0 border-t p-0 even:bg-muted">
                                                <td>Batch Processing</td>
                                                <td>4 - 6 Hours</td>
                                            </tr>
                                            <tr className="m-0 border-t p-0 even:bg-muted">
                                                <td>Complex ML Inference</td>
                                                <td>Variable (Secs)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>
                                    By optimizing our data architecture, we ensure that stakeholders have access to 
                                    high-fidelity reports when they need them most, rather than waiting for 
                                    overnight processing cycles.
                                </p>
                                <Alert>
                                    <Lightbulb className="h-4 w-4" />
                                    <AlertTitle>Analyst Pro-Tip</AlertTitle>
                                    <AlertDescription>
                                        Visualizations should tell a story in under 5 seconds. If a chart requires 
                                        a manual to explain, it's not an insight—it's noise.
                                    </AlertDescription>
                                </Alert>
                            </section>

                            {/* SECTION 3 */}
                            <section
                                id="section3"
                                ref={(ref) => addSectionRef('section3', ref)}
                                className="prose mb-8 scroll-mt-32 dark:prose-invert"
                            >
                                <h2>The Visualization Strategy</h2>
                                <p>
                                    A great insight is useless if it's trapped in a spreadsheet. We build 
                                    <a href="#">Interactive Dashboards</a> that empower users to drill down 
                                    into the specifics of their data.
                                </p>
                                <blockquote>
                                    &ldquo;Data is the new oil, but analytics is the refinery that turns it 
                                    into the fuel that powers modern organizations.&rdquo;
                                </blockquote>
                                <p>Our analytics delivery focuses on three core pillars:</p>
                                <ul>
                                    <li>Automated Reporting & Alerts</li>
                                    <li>Exploratory Data Analysis (EDA)</li>
                                    <li>Executive Summary Storyboarding</li>
                                </ul>
                                <p>
                                    Whether you are looking to optimize your marketing spend or improve product 
                                    retention, our data analytics framework provides the quantitative backing 
                                    required for bold, confident moves.
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
                                            The Analytics Pipeline
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
                                            Performance Benchmarks
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
                                            Visualization Strategy
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

export default DataAnalytics;