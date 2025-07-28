"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoSearchOutline, IoCall, IoCallOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const data = [
    { title: "Class 6-12", url: "", visible: "mobile" },
    { title: "Skills", url: "", visible: "mobile" },
    { title: "Admission", url: "", visible: "mobile" },
    { title: "Online Batch", url: "", visible: "" },
    { title: "English Center", url: "", visible: "" },
    { title: "More", url: "", visible: "mobile" },
  ];

  const isEnglish = pathname.startsWith("/en");

  const changeLanguage = () => {
    const newPath = isEnglish ? pathname.replace(/^\/en/, "") || "/" : "/en" + pathname;
    router.push(newPath);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white w-full border-b border-slate-300 py-4 px-4 md:px-7">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3">
        {/* Logo */}
        <div className="hidden md:block">
          <Link href="/">
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt="10ms"
              width={100}
              height={27}
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button>
            <RiMenuUnfoldLine className="text-2xl" />
          </button>
          <Link href="/">
            <Image
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              alt="10ms"
              width={100}
              height={20}
            />
          </Link>
        </div>

        {/* Search Input */}
        <div className="hidden md:block relative flex-1 min-w-[180px] max-w-[320px] me-5">
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

        {/* Nav Links */}
        <div className="hidden md:flex gap-6 items-center text-sm text-gray-600 whitespace-nowrap">
          {data.map((item, idx) => (
            <button key={idx} className="flex items-center gap-1">
              {item.title}
              <FaChevronDown className="text-xs" />
            </button>
          ))}
        </div>

        {/* Language Switcher */}
        <button onClick={changeLanguage}>
          <span className="hidden md:flex items-center gap-1 rounded border px-2 py-[2px] hover:bg-slate-50">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_9494_69309)">
              </g>
              <defs>
                <clipPath id="clip0_9494_69309">
                  <rect width="14" height="14" fill="white" transform="translate(0.291992)" />
                </clipPath>
              </defs>
            </svg>
            <span>{isEnglish ? "EN" : "BN"}</span>
          </span>
        </button>

        {/* Call & Login */}
        <button className="hidden md:flex items-center text-green">
          <IoCall className="mr-1" /> 16910
        </button>

        <div className="flex md:hidden items-center gap-3">
          <button>
            <IoSearchOutline size={22} />
          </button>
          <button>
            <IoCallOutline size={22} />
          </button>
          <button className="bg-green text-white text-xs px-[10px] py-[8px] rounded">
            লগ-ইন
          </button>
        </div>

        <button className="hidden md:block bg-green text-white text-sm px-3 py-[4px] rounded">
          লগ-ইন
        </button>
      </div>

      {/* Mobile Nav Links */}
      <div className="mt-8 flex md:hidden gap-6 justify-center items-center text-xs text-gray-600">
        {data
          .filter((item) => item.visible === "mobile")
          .map((item, idx) => (
            <button key={idx} className="flex items-center gap-1">
              {item.title}
              <FaChevronDown className="text-xs" />
            </button>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
