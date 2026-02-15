import Careers from "@/components/company/careers/careers";
import GraduateProgram from "@/components/company/careers/graduate-program";

export const metadata = {
  title: "Careers",
};

export default function CareersSection() {
  return  (
    <>
      <Careers />;
      <GraduateProgram />;
    </>
  )
}