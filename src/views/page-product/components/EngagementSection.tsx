import React from "react";
import EngagementCard from "@/components/ui/Card/EngagementCard";
import { Section } from "@/types/product";

type Props = {
  data: Section;
};

const EngagementSection = ({ data }: Props) => {
  return (
    <div className="">
      {data?.values?.map((item, idx) => (
        <EngagementCard key={idx} engagement={item} />
      ))}
    </div>
  );
};

export default EngagementSection;
