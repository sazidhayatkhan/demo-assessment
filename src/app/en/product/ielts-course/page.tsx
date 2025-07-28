import { fetchIELTSCourse } from "@/lib/api";
import type { Metadata } from "next";
import ProductUI from "@/views/page-product";

interface DefaultMeta {
  value: string;
  content: string;
}

interface SeoData {
  title?: string;
  description?: string;
  keywords?: string[];
  defaultMeta?: DefaultMeta[];
}


type ValidOgType = "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await fetchIELTSCourse("en");
    const seo = data?.seo as SeoData;

    const metaMap = new Map<string, string>(
      (seo?.defaultMeta || []).map((item) => [item.value, item.content])
    );

    const ogImage = metaMap.get("og:image");
    const ogTypeFromApi = metaMap.get("og:type");

    const validOgTypes = new Set([
      "website",
      "article",
      "book",
      "profile",
      "music.song",
      "music.album",
      "music.playlist",
      "music.radio_station",
      "video.movie",
      "video.episode",
      "video.tv_show",
      "video.other",
    ]);

    const ogType = validOgTypes.has(ogTypeFromApi ?? "") 
      ? (ogTypeFromApi as ValidOgType) 
      : "website";

    return {
      title: seo?.title || "IELTS Course | 10 Minute School",
      description: typeof seo?.description === "string" ? seo.description : undefined,
      keywords: seo?.keywords?.join(", "),
      openGraph: {
        title: metaMap.get("og:title") || seo?.title,
        description: metaMap.get("og:description") || seo?.description,
        url: metaMap.get("og:url"),
        type: ogType,
        locale: metaMap.get("og:locale"),
        images: ogImage
          ? [
              {
                url: ogImage,
                alt: metaMap.get("og:image:alt") || undefined,
                type: metaMap.get("og:image:type") || undefined,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: metaMap.get("og:title") || seo?.title,
        description: metaMap.get("og:description") || seo?.description,
        images: ogImage ? [ogImage] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    
    return {
      title: "IELTS Course | 10 Minute School",
      description: "Comprehensive IELTS preparation course to help you achieve your target score.",
      openGraph: {
        title: "IELTS Course | 10 Minute School",
        description: "Comprehensive IELTS preparation course to help you achieve your target score.",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "IELTS Course | 10 Minute School",
        description: "Comprehensive IELTS preparation course to help you achieve your target score.",
      },
    };
  }
}

export default async function IELTSPage() {
  try {
    const data = await fetchIELTSCourse("en");
    return <ProductUI data={data} />;
  } catch (error) {
    console.error("Error fetching IELTS course data:", error);
    throw error;
  }
}