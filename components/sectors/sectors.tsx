import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

interface SectorsProps {
  className?: string;
}

const Sectors = ({ className }: SectorsProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <BlurFade delay={0.25} inView>
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
           Public Sector Expertise
          </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
          <p className="mb-8 text-muted-foreground lg:text-lg">
           Supporting government agencies with rigorous data collection, 
            independent evaluation, and actionable social research for 
            effective policy-making.
          </p>
          <a
            href="/contact"
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            Request Capability Statement
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 2} inView>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="Feature 1"
              className="aspect-16/9 h-full w-full object-cover object-center"
            />
          </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Government & Public Policy
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Our primary specialization. we provide census-level data gathering, 
                social program assessments, and public sentiment tracking to 
                ensure governmental initiatives are backed by empirical evidence.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Institutional Research
              </h3>
              <p className="text-muted-foreground lg:text-lg">
               Working with national and international NGOs to quantify the 
                reach of social development projects, healthcare access, and 
                educational reforms in underserved communities.
              </p>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="Feature 2"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="Feature 1"
                className="aspect-16/9 h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Public-Private Partnerships
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                 Providing market intelligence for corporate entities and utilities 
                operating within public frameworks, focusing on consumer 
                behavior and service infrastructure demand.
              </p>
            </div>
          </div>
        </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Sectors;
