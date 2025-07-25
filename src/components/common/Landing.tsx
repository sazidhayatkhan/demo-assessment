"use client";

import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div
      className="min-h-[300px] md:min-h-[300px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
      }}
    >
      <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
          IELTS Course by Munzereen Shahid
        </h1>
        <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute h-[700px]">
          test
        </div>
      </div>
    </div>
  );
};

export default Landing;
