import {
  Infinity as InfinityIcon,
  MessagesSquare,
  Zap,
  ZoomIn,
  Microscope,
  Brain,
  Users2,
  Target
} from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";

import { cn } from "@/lib/utils";

const feature = [
  {
    title: "Our Mission",
    description:
      "To provide accurate and reliable data that helps organizations make informed, confident decisions.",
    icon: <Microscope className="size-6" />,
  },
  {
    title: "Our Strategy",
    description:
      "We turn complicated numbers into clear, practical plans that you can use immediately.",
    icon: <Brain className="size-6" />,
  },
  {
    title: "Our Experts",
    description:
      "Our team of researchers and strategists work together to give you a full view of your project.",
    icon: <Users2 className="size-6" />,
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted partner for high-quality research and strategic growth.",
    icon: <Target className="size-6" />,
  },
];

interface Feature15Props {
  className?: string;
}

const CoreValues = ({ className }: Feature15Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <BlurFade delay={0.25} inView>
            <p className="text-sm text-muted-foreground">THE ORAGON LAB DIFFERENCE</p>
            </BlurFade>
             <BlurFade delay={0.25} inView>
            <h2 className="text-3xl font-medium md:text-5xl">
              High-quality research led by industry experts.
            </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
            <p className="text-muted-foreground md:max-w-2xl">
              We believe that the best decisions are made with the best data. 
     Our team brings together years of experience to help you 
      understand your audience and plan your next move with confidence.
            </p>
            </BlurFade>
          </div>
        </div>
        <BlurFade delay={0.25 * 2} inView>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((feature, idx) => (
            <div
              className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8"
              key={idx}
            >
              <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background">
                {feature.icon}
              </span>
              <div>
                <h3 className="text-lg font-medium md:text-2xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default CoreValues;
