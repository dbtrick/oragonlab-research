import Sectors from "@/components/sectors/sectors";

export const metadata = {
  title: "Sectors",
};

export default function SectorsPage({ params }: { params: { slug?: string[] } }) {
  return  (
    <>
      <Sectors />;
    </>
  )
}
