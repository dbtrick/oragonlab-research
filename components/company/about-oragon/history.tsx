import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";

interface Feature {
  image: string;
  title: string;
  description: string;
}

interface Timeline3Props {
  className?: string;
  heading?: string;
  description?: string;
  buttons?: {
    primary: {
      text: string;
      url: string;
    };
    secondary: {
      text: string;
      url: string;
    };
  };
  features?: Feature[];
}

const History = ({
  className,
  heading = "Our journey of impact",
  description = "From a local Melbourne consultancy to a trusted national advisor, we bridge the gap between psychological research and organizational excellence to drive sustainable change.",
  buttons = {
    primary: {
      text: "Partner with us",
      url: "/contact",
    },
    secondary: {
      text: "Avalable Research",
      url: "/insights",
    },
  },
  features = [
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      title: "2024: Digital Transformation",
      description:
        "Launched our proprietary behavioral analytics platform, enabling clients to measure organizational flourishing in real-time.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "2021: National Expansion",
      description:
        "Established regional hubs in Sydney, Brisbane, and Perth to provide localized strategic support for our growing enterprise client base.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "2018: Global Research Partnership",
      description: "Collaborated with international institutes to integrate Applied Positive Psychology into executive leadership frameworks.",
    },
    {
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
      title: "2015: The Founding Vision",
      description: "Founded in Melbourne with a mission to bridge the gap between psychological science and corporate strategy.",
    },
  ],
}: Timeline3Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container max-w-6xl">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky">
            <BlurFade delay={0.25} inView>
            <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
              {heading}
            </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
            <p className="font-medium text-muted-foreground md:text-xl">
              {description}
            </p>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              <Button className="gap-2" size="lg" asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            </div>
            </BlurFade>
          </div>
          <BlurFade delay={0.25 * 2} inView>
          <div className="flex flex-col gap-12 md:gap-20">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl border p-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-video w-full rounded-xl border border-dashed object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default History;
