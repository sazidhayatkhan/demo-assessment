'use client'
import { Section } from '@/types/product';
import React, { useRef } from 'react';
import { FaCircleChevronRight,FaCircleChevronLeft } from "react-icons/fa6";
type Props = {

  data: Section[];
};

const CustomSlider = ({ data }: Props) => {

  const listRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const list = listRef.current;
    if (!list) return;

    const scrollAmount = list.children[0]?.clientWidth || 100;
    list.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="hidden relative md:flex items-center my-6">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 z-10 text-3xl text-gray-500"
      >
        <FaCircleChevronLeft/>
      </button>

      <ul
        ref={listRef}
        className="flex flex-nowrap overflow-x-scroll scroll-smooth no-scrollbar no-scrollbar mx-8"
      >
        {data?.map((item, idx) =>
          item?.name === '' ? null : (
            <li
              key={idx}
              className="text-nowrap p-2 text-base min-w-fit"
            >
              <button className='cursor-pointer font-medium text-gray-600'>{item?.name}</button>
            </li>
          )
        )}
      </ul>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 z-10 text-3xl text-gray-500"
      >
        <FaCircleChevronRight/>
      </button>
    </div>
  );
};

export default CustomSlider;
