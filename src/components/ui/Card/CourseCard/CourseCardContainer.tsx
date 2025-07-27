"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Media } from "@/types/media";
import CourseCardView from "./CourseCardView";
import { Checklist } from "@/types/checklist";

type Props = {
  data: Media[];
  checklist:Checklist[];
};

type MappedMedia = {
  type: "image" | "video";
  src: string;
  thumbnail: string;
};

const CourseCardContainer = ({ data = [], checklist=[] }: Props) => {
  const media: MappedMedia[] = useMemo(() => {
    return data
      .filter((item) => item.name === "preview_gallery")
      .map((item) => {
        const isVideo = item.resource_type === "video";
        return {
          type: isVideo ? "video" : "image",
          src: isVideo
            ? `https://www.youtube.com/embed/${item.resource_value}`
            : item.resource_value,
          thumbnail:
            item.thumbnail_url ||
            (item.resource_type === "image"
              ? item.resource_value
              : "/default-thumb.jpg"),
        };
      });
  }, [data]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Optional: Only preload the first image to avoid browser warning
  useEffect(() => {
    const first = media[0];
    if (!first || first.type !== "image") return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = first.thumbnail;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [media]);

  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : media.length - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev < media.length - 1 ? prev + 1 : 0));
  };

  const selectMedia = (index: number) => {
    setCurrentIndex(index);
  };

  if (media.length === 0) return null;

  return (
    <CourseCardView
      media={media}
      currentIndex={currentIndex}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      goPrev={goPrev}
      goNext={goNext}
      selectMedia={selectMedia}
      checklist={checklist}
    />
  );
};

export default CourseCardContainer;
