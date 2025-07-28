import React from "react";
import Image from "next/image";
import { Value } from "@/types/product";
import { FaChevronRight } from "react-icons/fa";
type Props = {
  instructor: Value;
};

const InstructorCard = ({ instructor }: Props) => {
  return (
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
        <div className="group cursor-pointer">
          <h3 className="text-lg flex items-center gap-1 group-hover:text-green">
            {instructor?.name}
            <span className="text-[13px] text-gray-400 group-hover:text-green">
              <FaChevronRight />
            </span>
          </h3>
        </div>
        <div className="text-sm leading-relaxed">
          <div
            dangerouslySetInnerHTML={{
              __html: instructor?.description ?? "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
