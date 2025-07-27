import React from "react";
import { Section } from "@/types/product";
import Image from 'next/image'

type Props = {
    data:Section
};

const CourseFeatureSection = ({data}: Props) => {
    console.log("daaaaaa",data);
  return (
    <div className="flex flex-col gap-3">
      <h2 className="mb-2 text-xl font-semibold md:text-2xl">{data?.name}</h2>
      <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {data?.values?.map((item,idx) => (
          <div key={idx} className="flex flex-row items-start gap-3 m-1">
            <div className="relative w-9 h-9 overflow-hidden rounded-full">
              <Image
                src={item?.icon || "/images/user.png"}
                alt={item?.title || "Item icon"}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-lg font-medium leading-[26px] text-white">
                {item?.title}
              </h2>
              <h2 className="text-sm font-normal leading-[22px] text-[#9CA3AF]">
                {item?.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatureSection;
