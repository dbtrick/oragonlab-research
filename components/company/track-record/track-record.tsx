import { Download } from "lucide-react";
import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Experience1Props {
  className?: string;
}

const TrackRecord = ({ className }: Experience1Props) => {
  const experience = [
    {
      period: "2024 - 2025",
      title: "National Digital Literacy Audit",
      description:
        "We mapped digital skill gaps across 15 regions, providing the evidence needed to launch a nationwide training program for rural communities.",
      company: "Public Sector",
    },
    {
      period: "2022 - 2023",
      title: "Multinational Market Entry",
      description:
        "Our team conducted a deep-dive analysis into consumer habits, helping a global retail brand successfully open its first 10 locations in a new market.",
      company: "Private Enterprise",
    },
    {
      period: "2020 - 2022",
      title: "Healthcare Accessibility Review",
      description:
        "By analyzing patient travel times and clinic data, we helped a regional health board redistribute resources to reach 30,000 more residents.",
      company: "Health Services",
    },
    {
      period: "2018 - 2020",
      title: "Educational Outcome Study",
      description:
        "We tracked the long-term results of remote learning tools, helping an international NGO refine their strategy for digital classroom support.",
      company: "Non-Profit",
    },
  ];

  return (
    <section className={cn("py-32", className)}>
      <BlurFade delay={0.25} inView>
      <div className="container space-y-10 lg:space-y-20">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            Track Record
          </h1>
          <Button variant="ghost" size="lg" className="font-semibold">
            Download Impact Report <Download className="size-4" />
          </Button>
        </div>

        <ul>
          {experience.map((exp, index) => (
            <li
              key={index}
              className="flex flex-col justify-between border-b py-10 md:flex-row"
            >
              <div className="max-w-lg text-xl font-semibold tracking-tighter lg:w-1/3">
                {exp.period}
              </div>
              <div className="lg:w-1/3">
                <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
                  {exp.title}
                </h2>
                <p className="text-foreground/50">{exp.description}</p>
              </div>
              <div className="text-right lg:w-1/4">{exp.company}</div>
            </li>
          ))}
        </ul>
      </div>
      </BlurFade>
    </section>
  );
};

export default TrackRecord;
