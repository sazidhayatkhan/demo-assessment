import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    // min-h-[30vh] md:h-[310px]
    <div className="pb-6 md:py-10 min-h-[300px] flex items-center">
        <div className="container px-4 md:px-12">
        <div className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
                IELTS Course by Munzereen Shahid
            </h1>
            <div className="mb-2">
                <button className="flex flex-row flex-wrap gap-2 text-white">
                <span className="inline-block">
                    <img
                        className="w-[100px] md:w-[130px]"
                        src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                        alt="rating"
                    />
                </span>
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
    </div>
  );
};

export default Header;
