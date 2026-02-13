import { ShieldUser, Globe, Lightbulb } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Hero45Props {
  badge?: string;
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Feature[];
  className?: string;
}

const About = ({
  badge = "Our Story",
  heading = "Driving progress through strategy and innovation",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "placeholder",
  features = [
    {
      icon: <ShieldUser className="h-auto w-5" />,
      title: "Integrity First",
      description:
        "We build trust through transparent communication and ethical decision-making in every partnership.",
    },
    {
      icon: <Lightbulb className="h-auto w-5" />,
      title: "Innovation Led",
      description:
        "Our approach combines creative thinking with data-driven insights to solve complex challenges.",
    },
    {
      icon: <Globe className="h-auto w-5" />,
      title: "Global Reach",
      description:
        "A diverse team operating across borders to provide localized expertise with a global perspective.",
    },
  ],
  className,
}: Hero45Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container overflow-hidden">
        <BlurFade delay={0.25} inView>
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">{badge}</Badge>
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <h2 className="text-3xl font-medium md:text-5xl">
              {heading}
            </h2>
          </div>
        </div>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
        <div className="relative mx-auto max-w-5xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] [background-size:12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-5xl flex-col md:flex-row">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-linear-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-background p-4"
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default About;
