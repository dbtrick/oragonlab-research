import Compliance from "@/components/company/standard-and-ethics/compliance";
import ComplianceTimeline from "@/components/company/standard-and-ethics/compliance-timeline";

export const metadata = {
  title: "Standard & Ethics",
};

export default function StandardAndEthics() {
  return  (
    <>
      <Compliance />;
      <ComplianceTimeline />;
    </>
  )
}