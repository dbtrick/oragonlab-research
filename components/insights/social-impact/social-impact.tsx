import { GitBranch, Lightbulb, FileText } from "lucide-react";

import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface CaseStudy1Props {
  className?: string;
}

const SocialImpact = ({ className }: CaseStudy1Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <BlurFade delay={0.25} inView>
          <Breadcrumb className="mb-6 lg:mb-10">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/insights">Insights</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Socio-Economic Impact Analysis</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          </BlurFade>
          <div className="relative flex-col gap-10 lg:flex lg:flex-row lg:justify-between">
            <div className="lg:max-w-[692px]">
              <div className="max lg:col-span-2">
                  <BlurFade delay={0.25 * 2} inView>
                <div>
                  <h1 className="text-3xl font-extrabold text-pretty lg:text-5xl">
                    Quantifying Community Wellbeing: A Socio-Economic Impact Study
                  </h1>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Our comprehensive analysis examined the intersection of public policy, 
                    economic stability, and community-wide psychological flourishing across 
                    regional Australian hubs.
                  </p>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt="Research Data Visualization"
                    className="my-8 aspect-video w-full rounded-lg object-cover"
                  />
                  <div className="mb-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl font-semibold sm:text-5xl">22%</p>
                      <p className="text-sm text-muted-foreground">
                        improvement in community safety perception
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl font-semibold sm:text-5xl">15k+</p>
                      <p className="text-sm text-muted-foreground">
                        participants in the longitudinal study
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl font-semibold sm:text-5xl">88%</p>
                      <p className="text-sm text-muted-foreground">
                        accuracy in predictive social modeling
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-4xl font-semibold sm:text-5xl">
                        Top 5
                      </p>
                      <p className="text-sm text-muted-foreground">
                        most impactful policy recommendations adopted
                      </p>
                    </div>
                  </div>
                </div>
                <div className="prose mb-8 max-w-full lg:max-w-prose dark:prose-invert">
                  <h2>Methodological Rigor</h2>
                  <p>
                    Utilizing a mixed-methods approach, our research team synthesized 
                    large-scale quantitative datasets with deep qualitative insights. 
                    This allowed for a nuanced understanding of how local economic 
                    fluctuations directly correlate with organizational performance 
                    and citizen engagement levels.
                  </p>
                  <Alert>
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle>Key Insight</AlertTitle>
                    <AlertDescription>
                      The study revealed that psychological safety within community 
                      frameworks is a stronger predictor of economic resilience than 
                      direct capital stimulus alone.
                    </AlertDescription>
                  </Alert>

                  <h2>Evidence-Based Outcomes</h2>
                  <p>
                    The results of this analysis provided a roadmap for state-level 
                    interventions, leading to a measurable increase in public sector 
                    efficiency and a revitalization of local sports and health programs.
                  </p>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Measurement Pillar</th>
                          <th>Post-Intervention Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Workforce Participation</td>
                          <td>+12.4% Growth</td>
                        </tr>
                        <tr className="m-0 border-t p-0 even:bg-muted">
                          <td>Social Cohesion Index</td>
                          <td>Significant Improvement</td>
                        </tr>
                        <tr className="m-0 border-t p-0 even:bg-muted">
                          <td>Healthcare Accessibility</td>
                          <td>Optimized Distribution</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    By bridging the gap between raw data and human experience, 
                    ORIMA Research empowered decision-makers to implement changes 
                    that were not only economically sound but socially transformative.
                  </p>

                  <h2>Strategic Recommendations</h2>
                  <p>
                    The final report outlined three critical pathways for sustainable 
                    development: prioritizing mental health infrastructure, 
                    fostering cross-departmental data transparency, and leveraging 
                    positive psychology in public communication.
                  </p>
                  <blockquote>
                    &ldquo;Evidence-based research is the cornerstone of effective 
                    governance. This study provides the clarity needed to navigate 
                    complex social landscapes.&rdquo;
                  </blockquote>
                  <p>
                    Following the adoption of these findings, the participating 
                    regions reported the highest levels of community satisfaction 
                    recorded in the last decade.
                  </p>
                </div>
                  </BlurFade>
              </div>
            </div>
            <BlurFade delay={0.25 * 2} inView>
            <div className="h-fit lg:sticky lg:top-8 lg:max-w-80">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                alt="ORIMA Research Logo"
                className="mb-8 w-36"
              />
              <p className="mb-1.5 text-sm font-semibold">Overview</p>
              <p className="mb-5 text-sm text-muted-foreground">
                Our team provided a deep-dive analysis into the socio-economic 
                drivers of community success, delivering actionable insights 
                for public sector leadership and NFP stakeholders.
              </p>
              <p className="mb-1.5 text-sm font-semibold">Sector</p>
              <p className="mb-5 text-sm text-muted-foreground">Public Policy & Social Research</p>
              <p className="mb-1.5 text-sm font-semibold">Solution</p>
              <Button size="sm" variant="outline">
                <FileText className="size-4 mr-2 opacity-60" />
                Impact Analysis
              </Button>
              <Separator className="my-5" />
              <p className="mb-3 text-sm font-semibold">Want the full report?</p>
<Button size="sm" className="w-full lg:w-auto" asChild>
  <a 
    href="/reports/owasp-api-security-top-10.pdf" 
    download="ORAGON-Impact-Analysis-Report.pdf"
    target="_blank" 
    rel="noopener noreferrer"
  >
    Download PDF Case Study
  </a>
</Button>
            </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;