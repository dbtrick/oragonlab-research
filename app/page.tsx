import Hero from "@/components/home/hero";
import Logos from "@/components/home/logos";
import Stats from "@/components/home/stats";
import LatestInsights from "@/components/home/latest-insight";
import Sectors from "@/components/home/sectors";
import Process from "@/components/home/process";
import CustomerReviews from "@/components/home/customer-reviews";
import Cta from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Stats />
      <LatestInsights />
      <Sectors />
      <Process />
      <CustomerReviews />
      <Cta />
    </>
  );
}
