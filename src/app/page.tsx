import { fetchIELTSCourse } from "@/lib/api";

export const metadata = {
  title: "IELTS Course | 10 Minute School",
};

export default async function IELTSPage() {
  const data = await fetchIELTSCourse();
  console.log("FACKED",data);
  
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-2 text-gray-600">{data.description}</p>
    </main>
  );
}
