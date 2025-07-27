import React from "react";
import Image from "next/image";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { Checklist } from "@/types/checklist";
import CtaButton from "../../Button/CtaButton";
import { CtaButtonModel } from "@/types/ctaButtonModel";

type MediaItem = {
  type: "image" | "video";
  src: string;
  thumbnail: string;
};

type Props = {
  media: MediaItem[];
  currentIndex: number;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  goPrev: () => void;
  goNext: () => void;
  selectMedia: (index: number) => void;
  checklist: Checklist[];
  ctaButton:CtaButtonModel;
};

const CourseCardView = ({
  media,
  currentIndex,
  isPlaying,
  setIsPlaying,
  goPrev,
  goNext,
  selectMedia,
  checklist,
  ctaButton
}: Props) => {
  const currentMedia = media[currentIndex];

  return (
    <div className="w-full md:max-w-[330px] lg:max-w-[390px] order-2 bg-white absolute right-9 md:top-[55px] md:absolute border border-slate-300 p-1">
      {/* Main preview */}
      <div className="relative h-[215px] bg-black flex items-center justify-center overflow-hidden">
        {currentMedia.type === "image" ? (
          <Image
            src={currentMedia.src}
            alt="Preview"
            fill
            className="object-contain object-top"
            priority
          />
        ) : isPlaying ? (
          <iframe
            src={`${currentMedia.src}?autoplay=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src={currentMedia.thumbnail}
              alt="Video Thumbnail"
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="none"
                viewBox="0 0 56 56"
              >
                <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.5" />
                <circle cx="28" cy="28" r="25.415" fill="#fff" />
                <path
                  fill="#1CAB55"
                  d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={goPrev}
          className="absolute left-2 text-white text-2xl"
        >
          <FaCircleChevronLeft />
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 text-white text-2xl"
        >
          <FaCircleChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex overflow-x-auto scroll-smooth no-scrollbar mt-3 gap-2 px-1 ps-4">
        {media.map((item, idx) => (
          <button
            key={idx}
            onClick={() => selectMedia(idx)}
            className={`cursor-pointer relative h-[42px] flex-shrink-0 border ${
              idx === currentIndex
                ? "border-green border-[2px] rounded-lg overflow-hidden"
                : "border-transparent"
            }`}
          >
            <Image
              src={item.thumbnail}
              alt={`Thumb ${idx}`}
              width={75}
              height={35}
              className="object-cover"
            />
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/images/little_play.svg"
                  alt="play-icon"
                  width={23}
                  height={23}
                  className="object-contain"
                />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Sticky Content */}
      <div className="md:sticky md:top-[112px] mt-4">
        <div className="p-4">
          {/* Price */}
          <div className="flex items-center justify-between md:flex-col md:items-start">
            <div className="md:mb-6">
              <div className="inline-block text-2xl font-semibold">৳3850</div>
              <span className="infline-flex">
                <del className="ml-2 text-base font-normal md:text-xl">
                  ৳5000
                </del>
                <div className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 inline-block opacity-70">
                    ১১৫০৳ ছাড়
                  </div>
              </span>
            </div>
          </div>

          {/* Button */}
            <CtaButton className="w-full">{ctaButton?.name}</CtaButton>

          {/* Checklist */}
          <p className="mb-4 text-xl font-semibold mt-8">এই কোর্সে যা থাকছে</p>
          {checklist?.map((item, idx) => (
            <div key={idx} className="flex items-center mb-3 leading-5">
              {item?.icon && (
                <div>
                  <Image
                    src={item?.icon}
                    alt="icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              )}
              <p className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                {item?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCardView;
