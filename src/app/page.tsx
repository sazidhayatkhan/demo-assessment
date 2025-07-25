import { fetchIELTSCourse } from "@/lib/api";

export const metadata = {
  title: "IELTS Course | 10 Minute School",
};

export default async function IELTSPage() {
  const data = await fetchIELTSCourse("bn");
  console.log("FACKED",data);
  const generatedAt = new Date().toLocaleTimeString();
  
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{data?.data?.description}</h1>
      <p className="text-sm text-gray-400 mt-4">
        Last generated at: {generatedAt}
      </p>
    </main>
  );
}
