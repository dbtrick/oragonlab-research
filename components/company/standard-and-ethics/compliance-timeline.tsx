import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
};

const timelineData: TimelineEntry[] = [
  {
    date: "Current Status",
    title: "ISO 27001 & 9001 Alignment",
    content:
      "We strictly adhere to ISO 27001 (Information Security Management) and ISO 9001 (Quality Management) standards, ensuring that our psychological frameworks and data handling meet international benchmarks for security and excellence.",
  },
  {
    date: "Ongoing",
    title: "Australian Privacy Principles (APP)",
    content:
      "Full compliance with the Privacy Act 1988 and APPs. Our data sovereignty protocols ensure that all sensitive organizational and individual psychological data is stored and processed within encrypted, local sovereign cloud environments.",
  },
  {
    date: "Annual Review",
    title: "Ethical Research & Clinical Governance",
    content:
      "Our methodologies are reviewed annually against the APS Code of Ethics. This clinical governance framework ensures that our applied positive psychology interventions are safe, evidence-based, and ethically sound.",
  },
  {
    date: "Certified",
    title: "AASM & MIPPA Membership Standards",
    content:
      "Maintaining active compliance with the Australian Association of Social Marketers and the International Positive Psychology Association. We ensure all strategic advice meets the highest standards of professional and academic rigor.",
  },
];

interface Timeline9Props {
  className?: string;
}

const ComplianceTimeline = ({ className }: Timeline9Props) => {
  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="container">
        <div className="mb-16 flex flex-col items-center text-center">
          <BlurFade delay={0.25} inView>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Compliance Framework
          </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
          <p className="max-w-2xl text-lg text-muted-foreground">
            We maintain the highest standards of regulatory and ethical compliance to protect our clients and ensure the integrity of our psychological interventions.
          </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.25 * 2} inView>
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <Separator
            orientation="vertical"
            className="absolute top-4 left-2 h-[calc(100%-20px)] bg-muted md:left-2"
          />
          
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-12 pl-10">
              {/* Dot */}
              <div className="absolute top-2.5 left-0 flex size-4 items-center justify-center rounded-full border-2 border-background bg-primary shadow-sm" />
              
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {entry.date}
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-foreground">
                  {entry.title}
                </h4>
              </div>

              <Card className="mt-4 border-none bg-transparent shadow-none">
                <CardContent className="px-0 py-0">
                  <p className="max-w-3xl leading-relaxed text-muted-foreground">
                    {entry.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ComplianceTimeline;