import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";

interface Blogpost2Props {
  className?: string;
}

const GraduateProgram = ({ className }: Blogpost2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
          <aside className="lg:sticky lg:top-28 h-fit flex-shrink-0 lg:w-[300px] xl:w-[400px]">
            <BlurFade delay={0.25} inView>
            <h1 className="mb-5 text-3xl font-bold text-balance lg:text-4xl">
              Graduate Program
            </h1>
            </BlurFade>
          </aside>
          <BlurFade delay={0.25 * 2} inView>
          <article className="">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="mt-0 mb-8 aspect-video w-full rounded-lg object-cover"
            />
            <div className="prose dark:prose-invert">
  <p>
    Oragon Lab Research’s Graduate Program has been operating for over 20 years,
    providing graduates with a strong foundation for a career in social
    research and consulting. Oragon Lab is an industry-leading private consultancy
    with offices across Australia and researchers located nationwide.
  </p>

  <h2>About the Graduate Program</h2>
  <p>
    The program is designed to support high-potential graduates through
    hands-on experience, mentoring, and structured development. Oragon Lab’s work
    focuses on improving community wellbeing through high-quality,
    evidence-based research for public and not-for-profit sector clients.
    You can learn more about our work{" "}
    <a href="/careers">here</a>.
  </p>

  <blockquote>
    &ldquo;Oragon Lab Research is strongly committed to its Graduate Program. It plays
    a key role in identifying, developing and retaining high-potential junior
    staff while supporting the company’s long-term growth.&rdquo;
  </blockquote>

  <h3>What to Expect</h3>
  <p>
    Graduates are supported through transparent career progression, regular
    performance reviews, and ongoing feedback with managers. Learning takes
    place both on the job and through a formal training program led by some of
    Australia’s most experienced research professionals.
  </p>

  <ul>
    <li>Structured mentoring and professional development</li>
    <li>Exposure to real client projects from day one</li>
    <li>Opportunities for collaboration across teams</li>
    <li>A strong focus on wellbeing and work-life balance</li>
  </ul>

  <h3>Graduate Program Pathways</h3>
  <p>
    Successful applicants are typically placed into one of Oragon Lab’s core
    research streams, depending on skills and interests:
  </p>

  <ul>
    <li>
      <strong>Qualitative Research</strong> – supporting interviews, focus
      groups, analysis, and report writing across government and social policy
      projects.
    </li>
    <li>
      <strong>Quantitative Research</strong> – working with survey design, data
      analysis, reporting, and statistical tools such as SPSS, Excel, Q, and R.
    </li>
    <li>
      <strong>Data Science</strong> (in selected intakes) – analysing and
      modelling large datasets, building dashboards, and working directly with
      clients.
    </li>
  </ul>

  <h3>Career Growth</h3>
  <p>
    Graduates work on substantive components of research projects and are given
    ownership of a graduate project to accelerate professional growth. Many of
    Oragon Lab’s senior staff began their careers through the Graduate Program,
    progressing into leadership and specialist roles over time.
  </p>

  <p>
    Oragon Lab offers a supportive, high-performance culture focused on collaboration,
    development, and meaningful work that makes a real difference to Australian
    communities.
  </p>
</div>

          </article>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default GraduateProgram;
