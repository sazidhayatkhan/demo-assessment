"use client";
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import {AboutValue} from '@/types/section'
type Props = {
  contents:AboutValue[]
};


const GroupAccordion: React.FC<Props> = ({contents}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="rounded-lg py-2 md:border md:px-5 border-slate-300">
      {contents?.map((item, index) => (
        <div
          key={index}
          className={`py-4 ${
            index !== contents.length - 1
              ? "border-b border-slate-200 border-dashed"
              : ""
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between text-left group"
          >
            <span className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
              <span dangerouslySetInnerHTML={{ __html: item?.title }}/>
            </span>
            <span className="text-sm text-slate-300 group-hover:text-black transition duration-500">
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
            }`}
          >
            <div className="px-0 pb-2 text-gray-500">
              <div
                className="prose prose-ul:pl-4"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupAccordion;
