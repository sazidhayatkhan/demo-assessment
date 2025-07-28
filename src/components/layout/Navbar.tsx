import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  const data = [
    {
      title: "Class 6-12",
      url: "",
    },
    {
      title: "Skills",
      url: "",
    },
    {
      title: "Admission",
      url: "",
    },
    {
      title: "Online Batch",
      url: "",
    },
    {
      title: "English Center",
      url: "",
    },
    {
      title: "More",
      url: "",
    },
  ];
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white px-4 md:px-7 py-4 w-full border-b-[1px] border-slate-300">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt="10ms"
              width={100}
              height={27}
            />
          </Link>
          <div className="relative max-w-[300px] w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <IoSearchOutline size={18} />
            </span>
            <input
              type="text"
              placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-full text-xs text-gray-700 placeholder-gray-400 outline-none"
              aria-label="Search courses or school programs"
            />
          </div>
          <div>
            <ul className="flex gap-6 items-center">
              {data?.map((item: { title: string }, idx: number) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center gap-1">
                  {item.title}
                  <span className="text-xs"><FaChevronDown/></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
