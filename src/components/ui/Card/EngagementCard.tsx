import React from "react";
import Image from "next/image";
import { Value } from "@/types/product";

type Props = {
  engagement:Value
};

const EngagementCard = ({ engagement }: Props) => {

  
  return (
    <div
      className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
      style={{
        backgroundImage: `url(${engagement?.background?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full md:w-1/2">
        {engagement?.top_left_icon_img && (
          <Image
            src={engagement.top_left_icon_img}
            alt="Icon"
            width={190} 
            height={40}
            className="mb-4"
          />
        )}
        <h2
          className="text-xl font-semibold"
          style={{ color: engagement?.title_color }}
        >
          {engagement?.title}
        </h2>
        <p
          className="mt-2 text-base"
          style={{ color: engagement?.description_color }}
        >
          {engagement?.description}
        </p>
        <button>download</button>
      </div>
      <div className="items-center hidden w-1/2 md:flex">
        {
          engagement?.thumbnail && 
          <Image 
            src={engagement?.thumbnail}
            alt="thumbnail"
            width={320}
            height={180}
          />
        }
      </div>
    </div>
  );
};

export default EngagementCard;
