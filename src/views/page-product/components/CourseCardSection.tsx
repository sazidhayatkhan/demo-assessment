import React from "react";
import Image from "next/image";
import CtaButton from "@/components/ui/Button/CtaButton";
import { Checklist } from "@/types/checklist";
import { CtaButtonModel } from "@/types/ctaButtonModel";

type Props = {
    checklist: Checklist[];
      ctaButton: CtaButtonModel;
};

const CourseCardSection = ({checklist,
  ctaButton}: Props) => {
  return (
    <div className="bg-white">
      <div className="p-4">
        {/* Price */}
        <div className="flex items-center justify-between md:flex-col md:items-start">
          <div className="mb-6">
            <div className="inline-block text-2xl font-semibold">৳3850</div>
            <span className="infline-flex">
              <del className="ml-2 text-base font-normal md:text-xl">৳5000</del>
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
  );
};

export default CourseCardSection;
