"use client";

import { Workflow, CornerDownRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

interface Process1Props {
  className?: string;
}

const Process = ({ className }: Process1Props) => {
  const process = [
    {
      step: "01",
      title: "Diagnostic Discovery",
      description:
        "We define the research parameters by auditing your current data landscape and identifying critical knowledge gaps. This phase ensures our investigative framework aligns with your institutional goals.",
    },
    {
      step: "02",
      title: "Methodological Design",
      description:
        "Our data scientists develop custom qualitative and quantitative instruments. We outline the sampling logic, ethical safeguards, and analytical models required to extract high-fidelity insights.",
    },
    {
      step: "03",
      title: "Execution & Synthesis",
      description:
        "Fieldwork and data harvesting are conducted under strict quality controls. We then synthesize complex datasets into coherent narratives, identifying patterns that traditional analysis might overlook.",
    },
    {
      step: "04",
      title: "Strategic Implementation",
      description:
        "We translate findings into a tactical roadmap. Beyond just delivering a report, we provide the advisory support necessary to integrate these insights into your decision-making ecosystem.",
    },
  ];

  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <BlurFade delay={0.25} inView>
      <div className="container px-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              <h2 className="w-fit">Our Process</h2>
              <Workflow className="absolute -top-0 -right-2 size-5 md:size-10 lg:-right-14"style={{ color: "oklch(0.62 0.22 229)" }} />
            </div>
            <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
              At Orima, we combine academic rigor with corporate agility. Our 
              four-stage framework ensures every insight is validated, ethical, and 
              entirely actionable.
            </p>

            <Button
            asChild
            variant="ghost"
            className="flex items-center justify-start gap-2 px-0 hover:bg-transparent transition-colors"
          >
            <Link href="/contact" style={{ color: "oklch(0.62 0.22 229)" }}>
              <CornerDownRight size={20} style={{ color: "oklch(0.62 0.22 229)" }} />
              Start a consultation
            </Link>
          </Button>
          </div>
          <ul className="relative col-span-4 w-full border-t border-border lg:pl-22">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-8 border-b border-border/60 py-10 md:flex-row lg:py-14"
              >
                {/* Visual marker for minimalist feel */}
                <Illustration className="absolute top-6 right-0 opacity-40" />

                <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-muted text-sm font-bold tracking-tighter">
                  {step.step}
                </div>
                <div className="max-w-2xl">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </BlurFade>
    </section>
  );
};

export default Process;

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};