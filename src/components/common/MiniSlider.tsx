'use client'
import React, { useRef } from 'react';

type Props = {
  data: any;
};

const MiniSlider = ({ data }: Props) => {
  const listRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const list = listRef.current;
    if (!list) return;

    const scrollAmount = list.children[0]?.clientWidth || 100; // fallback scroll size
    list.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="hidden relative md:flex items-center">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 z-10 px-2 py-1 bg-white shadow-md rounded-l"
      >
        ◀
      </button>

      <ul
        ref={listRef}
        className="flex flex-nowrap overflow-x-scroll scroll-smooth no-scrollbar no-scrollbar mx-8"
      >
        {data?.map((item: any, i: number) =>
          item?.name === '' ? null : (
            <li
              key={i}
              className="text-nowrap p-2 text-base text-gray-600 min-w-fit"
            >
              <button className='cursor-pointer'>{item?.name}</button>
            </li>
          )
        )}
      </ul>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 z-10 px-2 py-1 bg-white shadow-md rounded-r"
      >
        ▶
      </button>
    </div>
  );
};

export default MiniSlider;
