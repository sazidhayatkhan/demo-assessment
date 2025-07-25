export async function fetchIELTSCourse(lang: "en" | "bn" = "en") {
  const url = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en&=`;

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
