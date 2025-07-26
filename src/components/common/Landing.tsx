"use client";

import React from "react";

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className="min-h-[300px] md:min-h-[300px] bg-black flex items-center">
      <div>
        <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
          IELTS Course by Munzereen Shahid
        </h1>
        <div className="mb-2">
                      <button className="flex flex-row flex-wrap gap-2 text-white">
                      <img
                          className="md:w-[130px] w-[100px]"
                          src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                          alt="rating"
                      />
                      <span className="inline-block text-sm md:text-base">
                          (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                      </span>
                      </button>
                  </div>
        <div className="text-gray-400">
          <p className="whitespace-pre-wrap">
            Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন
            একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত
            ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
