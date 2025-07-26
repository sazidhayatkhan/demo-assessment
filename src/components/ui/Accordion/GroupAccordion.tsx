"use client";
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

type AccordionItem = {
  title: string;
  content: string;
};

const data: AccordionItem[] = [
  {
    title: "Course Title 1",
    content:
      "\u003Cli\u003Eযারা উচ্চশিক্ষা, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে চান।\u003C/li\u003E\n\u003Cli\u003Eযারা উচ্চশিক্ষা শেষে বা দেশে বসবাসরত অবস্থায় বিদেশে স্থায়ীভাবে বসবাসের জন্য আবেদন করতে চান।\u003C/li\u003E\n\u003Cli\u003EIELTS পরীক্ষা যাদের জন্য ভীতিকর, কিংবা যারা IELTS প্রস্তুতি কোথা থেকে শুরু করবেন তা জানেন না।\u003C/li\u003E\n\u003Cli\u003Eযারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score বাড়াতে চান।\u003C/li\u003E\n\u003Cli\u003Eযারা চাকরি বা ব্যবসার কাজে কিংবা ব্যক্তিগত আগ্রহে নিজেদের reading, writing, listening এবং speaking দক্ষতা বাড়াতে চান।\u003C/li\u003E\n\u003Cli\u003E স্টুডেন্ট কিংবা চাকরিজীবীদের মধ্যে যারা ব্যস্ততার কারনে ঘরে বসেই IELTS এর জন্য সেরা প্রস্তুতি নিতে চান।\u003C/li\u003E",
  },
  {
    title: "Course Title 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et placeat eaque eos nam vero numquam ea distinctio, a at nesciunt modi molestiae quos? Voluptas, laborum! Molestias aspernatur voluptate animi.",
  },
  {
    title: "Course Title 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et placeat eaque eos nam vero numquam ea distinctio, a at nesciunt modi molestiae quos? Voluptas, laborum! Molestias aspernatur voluptate animi.",
  },
];

const GroupAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="rounded-lg py-2 md:border md:px-5 border-slate-300">
      {data.map((item, index) => (
        <div
          key={index}
          className={`py-2 ${
            index !== data.length - 1
              ? "border-b border-slate-200 border-dashed"
              : ""
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between text-left group"
          >
            <span className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
              {item.title}
            </span>
            <span className="text-sm text-slate-300 group-hover:text-black transition duration-500">
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-[500px] mt-2" : "max-h-0"
            }`}
          >
            <div className="px-0 pb-2 text-gray-500">
              <div
                className="prose prose-ul:pl-4"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupAccordion;
