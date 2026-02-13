"use client";

import { Easing, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";

const easeTransition: Easing = [0.25, 0.1, 0.25, 1];

interface Industry {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
}

interface Industries1Props {
  title?: string;
  industryLabel?: string;
  industries?: Industry[];
  className?: string;
}

const Sectors = ({
  className,
  title = "Who We Serve",
  industryLabel = "Expertise",
  industries = [
    {
      name: "Federal Government",
      description:
        "Providing national research and data services to help federal departments develop and review public policies.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      imageAlt: "Federal government research",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "First Nations Research",
      description:
        "Specialized, culturally-safe research and engagement with Aboriginal and Torres Strait Islander communities across Australia.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      imageAlt: "First Nations research and engagement",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "State & Local Council",
      description:
        "Helping local leaders understand community needs to improve regional services and infrastructure planning.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      imageAlt: "State and local research",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "Public Health",
      description:
        "Studies on health trends and service access to help agencies build a healthier Australia for everyone.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      imageAlt: "Public health research",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "Community Evaluation",
      description:
        "Working directly with First Nations organizations to evaluate the success of community-led social programs.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      imageAlt: "Community program evaluation",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "Education & Training",
      description:
        "Analyzing student outcomes and workforce trends to help educational institutions plan for the future.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      imageAlt: "Education research",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "Social Services",
      description:
        "Evaluating programs that support vulnerable people to ensure government funding is making a real difference.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      imageAlt: "Social services evaluation",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "Environment & Water",
      description:
        "Researching community attitudes toward land care, water usage, and sustainable resource management.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      imageAlt: "Environmental research",
      url: "http://shadcnblocks.com/blocks",
    },
  ],
}: Industries1Props) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <BlurFade delay={0.25} inView>
          <h2 className="mb-8 text-3xl font-medium text-foreground">{title}</h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
        <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <a href={industry.url} key={index}>
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-muted"
                whileHover="hover"
                initial="initial"
              >
                {/* Default state: Image and heading */}
                <motion.div
                  variants={{
                    initial: {
                      opacity: 1,
                      pointerEvents: "auto",
                      clipPath: "inset(0% 0% 0% 0%)",
                    },
                    hover: {
                      opacity: 0,
                      pointerEvents: "none",
                      clipPath: "inset(0% 0% 100% 0%)",
                    },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  className="relative z-0 flex h-full min-h-120 flex-col items-center justify-center lg:min-h-144 xl:min-h-112"
                >
                  <div className="flex h-full justify-center">
                    <img
                      src={industry.image}
                      alt={industry.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="absolute bottom-10 text-lg font-medium text-foreground">
                    {industry.name}
                  </h3>
                </motion.div>

                {/* Black overlay - slides up from bottom */}
                <motion.div
                  className="absolute inset-0 z-10 bg-black"
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  style={{ willChange: "transform" }}
                />

                {/* Hover state: Description */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  className="absolute inset-0 z-20 flex min-h-120 items-center justify-center p-8 text-white lg:min-h-144 xl:min-h-112"
                >
                  <div className="space-y-3">
                    <p className="font-medium opacity-90">{industryLabel}:</p>
                    <p>{industry.description}</p>
                  </div>
                </motion.div>

                {/* Plus button */}
                <motion.div
                  className="absolute top-4 right-4 z-30"
                  variants={{
                    initial: { opacity: 0.7, rotate: 0 },
                    hover: { opacity: 1, rotate: 90 },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                >
                  <div className="relative rounded-full p-2">
                    <div className="absolute inset-0 rounded-full bg-muted-foreground/20" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-muted-foreground"
                      variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.4, ease: easeTransition }}
                    />
                    <Plus className="relative z-10 size-4" />
                  </div>
                </motion.div>
              </motion.div>
            </a>
          ))}
        </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Sectors;
