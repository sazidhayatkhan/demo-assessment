import React from "react";
import { Section, InstructorValue } from "@/types/section";
import Image from "next/image";

type Props = {
  data: Section;
};

const InstructorCard = ({ data }: Props) => {
  const instructor: InstructorValue = data?.values[0];

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">{data?.name}</h2>
      <div className="flex items-center md:rounded-md md:border border-slate-300 md:p-5">
        <div className="relative h-20 w-20 rounded-full overflow-hidden opacity-100 transition-opacity duration-300 ease-in-out">
          <Image
            src={instructor?.image || "/image/user.png"}
            alt={instructor?.name || "Instructor"}
            fill
            className="object-cover"
            sizes="96px"
            priority
          />
        </div>
        <div className="flex-1 ml-4">
          <h3 className="text-lg">{instructor?.name}</h3>
          <div className="text-sm leading-relaxed">
            <div
              dangerouslySetInnerHTML={{
                __html: instructor?.description ?? "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
