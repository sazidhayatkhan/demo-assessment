"use client";
import { Section } from "@/types/product";
import React, { useRef } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { useSectionStore } from "@/store/sectionStore";

type Props = {
  data: Section[];
};

const CustomSlider = ({ data }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);
  const setActiveSection = useSectionStore((state) => state.setActiveSection);
  const activeSection = useSectionStore((state) => state.activeSection);

  const scroll = (direction: "left" | "right") => {
    const list = listRef.current;
    if (!list) return;
    const scrollAmount = list.children[0]?.clientWidth || 100;
    list.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="hidden relative md:flex items-center">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 text-3xl text-gray-500"
      >
        <FaCircleChevronLeft />
      </button>

      <ul
        ref={listRef}
        className="flex flex-nowrap overflow-x-scroll scroll-smooth no-scrollbar mx-8 border-b-[1px] border-slate-300"
      >
        {data?.map((item, idx) =>
          item?.name === "" ? null : (
            <li key={idx} className="text-nowrap text-base min-w-fit">
              <button
                className={`p-2 cursor-pointer font-medium ${
                  activeSection === item.name
                    ? "text-green border-b-[2px] border-green"
                    : "text-gray-600"
                }`}
                onClick={() => {
                  const target = document.getElementById(item.name || "");
                  if (target) {
                    const offsetTop =
                      target.getBoundingClientRect().top + window.scrollY - 200;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    setActiveSection(item.name || "");
                  }
                }}
              >
                {item.name}
              </button>
            </li>
          )
        )}
      </ul>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 text-3xl text-gray-500"
      >
        <FaCircleChevronRight />
      </button>
    </div>
  );
};

export default CustomSlider;
