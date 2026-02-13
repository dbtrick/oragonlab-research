import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";

interface Feature {
  id: string;
  heading: string;
  label: string;
  description: string;
  image: string;
  url: string;
}

interface Feature13Props {
  title?: string;
  features?: Feature[];
  className?: string;
}

const Insights = ({
  title = "Latest Research & Strategic Insights",
  features = [
    {
      id: "insight-1",
      heading: "Socio-Economic Impact Analysis",
      label: "SOCIAL RESEARCH",
      description:
        "Comprehensive studies on community development and economic shifts. We provide the data necessary to evaluate social programs and public policy effectiveness.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      url: "/insights/social-impact",
    },
    {
      id: "insight-2",
      heading: "Consumer Behavioral Trends 2026",
      label: "MARKET INTELLIGENCE",
      description:
        "Utilizing advanced sentiment analysis to track shifting consumer preferences. Discover how emerging market trends are reshaping the retail and service industries.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
      url: "/insights/social-impact",
    },
    {
      id: "insight-3",
      heading: "Governance & Public Opinion",
      label: "POLICY RESEARCH",
      description:
        "Independent polling and analysis of public sentiment regarding governance, civic engagement, and regulatory changes within the local landscape.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
      url: "/insights/social-impact",
    },
    {
      id: "insight-4",
      heading: "Digital Transformation Data",
      label: "TECHNOLOGY",
      description:
        "Quantifying the impact of digital adoption in remote regions. This study highlights the gap between infrastructure growth and actual digital literacy.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg",
      url: "/insights/social-impact",
    },
    {
      id: "insight-5",
      heading: "Predictive Healthcare Modeling",
      label: "HEALTH & WELLNESS",
      description:
        "Applying statistical models to healthcare access data to predict future needs in underserved communities and improve resource allocation.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
      url: "/insights/social-impact",
    },
    {
      id: "insight-6",
      heading: "Sustainable Urban Development",
      label: "ENVIRONMENT",
      description:
        "Analyzing the correlation between urban density and environmental sustainability markers through high-resolution spatial data analysis.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg",
      url: "/insights/social-impact",
    },
    {
      id: "insight-7",
      heading: "Predictive Healthcare Modeling",
      label: "HEALTH & WELLNESS",
      description:
        "Applying statistical models to healthcare access data to predict future needs in underserved communities and improve resource allocation.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
      url: "/insights/social-impact",
    },
    {
      id: "insight-8",
      heading: "Sustainable Urban Development",
      label: "ENVIRONMENT",
      description:
        "Analyzing the correlation between urban density and environmental sustainability markers through high-resolution spatial data analysis.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg",
      url: "/insights/social-impact",
    },
  ],
  className,
}: Feature13Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        {title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <BlurFade delay={0.25} inView>
            <h2 className="text-4xl font-medium text-pretty lg:text-5xl">
              {title}
            </h2>
            </BlurFade>
          </div>
        )}
        <BlurFade delay={0.25 * 2} inView>
        <div className="grid gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-between rounded-lg bg-muted"
            >
              <div className="flex justify-between gap-10 border-b">
                <div className="flex flex-col justify-between justify-start gap-8 py-6 pl-4 md:gap-14 md:py-10 md:pl-8 lg:justify-normal">
                  <span className="font-mono text-xs text-muted-foreground">
                    {feature.label}
                  </span>
                  <a href={feature.url}>
                    <h3 className="text-2xl transition-all hover:text-primary hover:opacity-80 sm:text-3xl lg:text-4xl">
                      {feature.heading}
                    </h3>
                  </a>
                </div>
                <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
                  <a href={feature.url}>
                    <img
                      src={feature.image}
                      alt={feature.heading}
                      className="h-full w-full rounded-t-lg object-cover transition-opacity hover:opacity-80"
                    />
                  </a>
                </div>
              </div>
              <p className="p-4 text-muted-foreground md:p-8">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Insights;
