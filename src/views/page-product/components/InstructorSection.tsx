import React from "react";
import { Section } from "@/types/product";
import InstructorCard from "@/components/ui/Card/InstructorCard";


type Props = {
  data: Section;
};

const InstructorSection = ({ data }: Props) => {
  return (
    <div>
      <div className="section-divider"></div>
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">{data?.name}</h2>
      {data?.values?.map((item, idx) => (
        <InstructorCard key={idx} instructor={item}/>
      ))}
    </div>
  );
};

export default InstructorSection;
