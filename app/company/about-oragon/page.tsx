import About from "@/components/company/about-oragon/about-oragon";
import CoreValues from "@/components/company/about-oragon/core-values";
import Team from "@/components/company/about-oragon/team";
import History from "@/components/company/about-oragon/history";

export const metadata = {
  title: "About",
};


export default function SectorsPage() {
  return  (
    <>
      <About />;
      <CoreValues />;
      <Team />;
      <History />;
    </>
  )
}