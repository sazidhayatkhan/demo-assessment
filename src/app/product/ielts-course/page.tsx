import { fetchIELTSCourse } from "@/lib/api";
import ProductUI from "@/views/page-product";

export const metadata = {
  title: "IELTS Course | 10 Minute School",
};

export default async function IELTSPage() {
  const data = await fetchIELTSCourse("bn");

  return (
    <ProductUI data={data}/>
  );
}
