"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { BlurFade } from "@/components/ui/blur-fade";


interface Cta10Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

const Cta = ({
  heading = "Ready to inform your next policy decision?",
  description = "Partner with Oragon Lab to gather the high-quality data and evidence-based insights you need to drive meaningful change in the community.",
  buttons = {
    primary: {
      text: "Get in Touch",
      url: "/contact",
    },
  },
  className,
}: Cta10Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <BlurFade delay={0.25} inView>
        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h3>
            <p className="max-w-xl text-muted-foreground lg:text-lg">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild variant="default" size="lg">
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Cta;
