const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchIELTSCourse(lang: "en" | "bn" = "en") {
  const url = `${BASE_URL}/products/ielts-course?lang=${lang}`;

  const res = await fetch(url, {
    headers: {
      "X-TENMS-SOURCE-PLATFORM": "web",
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch IELTS data: ${res.status}`);
  }

  return res.json();
}
