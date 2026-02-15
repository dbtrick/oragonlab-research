import Sectors from "@/components/sectors/sectors";

export default function SectorsPage({ params }: { params: { slug?: string[] } }) {
  return  (
    <>
      <Sectors />;
    </>
  )
}
