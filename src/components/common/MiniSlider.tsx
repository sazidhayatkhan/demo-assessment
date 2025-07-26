"use client";
import React from "react";
import Slider from "react-slick";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

type Props = {
    data:any;
};

const MiniSlider = ({data}: Props) => {
  function SampleNextArrow({ onClick }: any) {
    return (
      <FaCircleChevronRight
        className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-3xl text-gray-500 cursor-pointer z-10 hidden md:block"
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow({ onClick }: any) {
    return (
      <FaCircleChevronLeft
        className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-3xl text-gray-500 cursor-pointer z-10 hidden md:block"
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="hidden md:block my-3 w-full relative px-8"> {/* Relative container to anchor arrows */}
      <Slider {...settings}>
        {data?.map((item:any, i:any) => (
          <div key={i} className="">
            <div className="border-b-[1px] border-gray-600">
              <button className="text-nowrap p-2 text-base text-gray-600 hover:text-green cursor-pointer">{item?.name}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MiniSlider;
