import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import { BlurFade } from "@/components/ui/blur-fade";

interface TeamMember {
  id: string;
  nameWithCredentials: string;
  roleAndLocation: string;
  bio: string;
  image: string;
}

interface TeamProps {
  heading?: string;
  description?: string;
  members?: TeamMember[];
  className?: string;
}

const Team = ({
  heading = "Our Team",
  description = "A multidisciplinary collective of psychological experts and strategic advisors dedicated to organizational flourishing.",
  members = [
    {
      id: "1",
      nameWithCredentials: "John Doe, BSc (Psych), Grad Dip (Org Psych), Master of Applied Positive Psychology, QPR, FTRS, MIPPA, MAASM, MAMI",
      roleAndLocation: "Founding Director | Melbourne",
      bio: "John leads the firm's strategic vision, integrating positive psychology with organizational systems to drive sustainable performance.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "2",
      nameWithCredentials: "Jane Smith, PhD, MSc (Org Psych), MAPS",
      roleAndLocation: "Principal Consultant | Sydney",
      bio: "Specializes in cultural transformation and large-scale organizational change management for ASX-listed companies.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "3",
      nameWithCredentials: "Robert Wilson, MBA, BA (Psych), GAICD",
      roleAndLocation: "Strategic Lead | Brisbane",
      bio: "Bridges the gap between psychological safety and corporate governance to ensure ethical and effective leadership.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "4",
      nameWithCredentials: "Alice Johnson, MAppPosPsych, BPsych (Hons)",
      roleAndLocation: "Senior Consultant | Perth",
      bio: "Focuses on applied positive psychology to improve employee engagement and resilience in high-pressure sectors.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "5",
      nameWithCredentials: "Michael Brown, Grad Dip (Psych), MHRM",
      roleAndLocation: "Operations Director | Adelaide",
      bio: "Oversees operational excellence and project delivery, ensuring seamless client experiences across Australia.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "6",
      nameWithCredentials: "Sarah Lee, PhD (Clin Psych), MIPPA",
      roleAndLocation: "Research Lead | Melbourne",
      bio: "Leads internal research initiatives, keeping our methodology at the forefront of contemporary psychological science.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "7",
      nameWithCredentials: "David Chen, BSc (Hons), MOrgPsych",
      roleAndLocation: "Behavioral Analyst | Sydney",
      bio: "Expert in psychometric assessment and data analytics, helping organizations identify and develop top-tier talent.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "8",
      nameWithCredentials: "Emma Thompson, BA (Psych), Grad Dip (Couns), MACA",
      roleAndLocation: "Wellness Coordinator | Melbourne",
      bio: "Develops comprehensive workplace mental health programs and proactive intervention strategies.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "9",
      nameWithCredentials: "James Anderson, MAppPosPsych, BCom",
      roleAndLocation: "Performance Coach | Brisbane",
      bio: "Combines business acumen with positive psychology to coach executives through complex transitions.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "10",
      nameWithCredentials: "Michelle Garcia, PhD (Psych), MAMI",
      roleAndLocation: "Diversity & Inclusion Lead | Canberra",
      bio: "Advises on inclusive leadership and creating equitable workplace environments across the public sector.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "11",
      nameWithCredentials: "Thomas Wright, MSc (Org Psych), PGDip (HRM)",
      roleAndLocation: "Talent Specialist | Hobart",
      bio: "Specializes in succession planning and leadership development frameworks for regional organizations.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "12",
      nameWithCredentials: "Rachel Taylor, BPsych (Hons), Grad Cert (Mgmt)",
      roleAndLocation: "Client Relationship Manager | Sydney",
      bio: "Ensures that our consulting solutions are perfectly aligned with the unique strategic goals of our clients.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "13",
      nameWithCredentials: "Christopher King, PhD, MIPPA, MAASM",
      roleAndLocation: "Innovation Advisor | Melbourne",
      bio: "Explores the intersection of technology and psychology to enhance digital workplace collaboration.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "14",
      nameWithCredentials: "Laura White, MOrgPsych, BAppSc",
      roleAndLocation: "Change Consultant | Adelaide",
      bio: "Facilitates workshops and training programs that empower employees to thrive during periods of change.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "15",
      nameWithCredentials: "Kevin Nguyen, BSc (Psych), MHRM",
      roleAndLocation: "Engagement Specialist | Sydney",
      bio: "Utilizes advanced survey methodologies to measure and improve organizational climate and culture.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
  className,
}: TeamProps) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <BlurFade delay={0.25} inView>
          <h2 className="mb-3 text-3xl font-bold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
          <p className="mx-auto mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          </BlurFade>
        </div>
          <BlurFade delay={0.25 * 2} inView>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
          {members.map((member) => (
            <Card
              key={member.id}
              className="flex flex-col overflow-hidden border-none bg-transparent shadow-none"
            >
              <div className="aspect-square w-full overflow-hidden rounded-2xl border bg-muted">
                <img
                  src={member.image}
                  alt={member.nameWithCredentials}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="px-0 pb-3">
                <h3 className="text-lg font-bold leading-tight text-foreground/90">
                  {member.nameWithCredentials}
                </h3>
                <p className="text-[0.8rem] font-semibold text-primary uppercase tracking-widest">
                  {member.roleAndLocation}
                </p>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-sm leading-relaxed text-muted-foreground/80">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
          </BlurFade>
      </div>
    </section>
  );
};

export default Team;