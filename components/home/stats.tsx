"use client";

import { BlurFade } from "@/components/ui/blur-fade";

import { cn } from "@/lib/utils";

interface Stats8Props {
  className?: string;
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

const Stats = ({
  heading = "Our impact in numbers",
  description = "We use high-quality data to help organizations make better decisions.",
  stats = [
    {
      id: "stat-1",
      value: "500+",
      label: "Successful projects completed for our clients",
    },
    {
      id: "stat-2",
      value: "99.8%",
      label: "Accuracy rate in the data we collect",
    },
    {
      id: "stat-3",
      value: "15+",
      label: "Different industries we work with",
    },
    {
      id: "stat-4",
      value: "1.2M",
      label: "People who have taken part in our studies",
    },
  ],
  className,
}: Stats8Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
       <div className="container flex flex-col items-center text-center">
          <div className="mx-auto mb-4 max-w-3xl text-center">
              <BlurFade delay={0.25} inView>
              <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                  {heading}
              </h2>
              <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
                  {description}
              </p>
              </BlurFade>
          </div>
        </div>
        <div className="mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
           
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-5">
             <BlurFade delay={0.25 * 2} inView>
              <div className="text-6xl font-bold">{stat.value}</div>
              <p>{stat.label}</p>
              </BlurFade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
