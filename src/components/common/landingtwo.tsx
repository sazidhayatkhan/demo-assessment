'use client'

import React from 'react'

type Props = {}

const Landingtwo = (props: Props) => {
  return (
    <div
      className="min-h-[300px] md:min-h-[300px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
      }}
    >
        <div className='mx-auto md:max-w-[1200px]'>
            <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
                {/* Left Section */}
                <div className="order-1 flex flex-col justify-center flex-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
                {/* Mobile Video Preview */}
                <div className="block mt-4 md:mt-0 md:hidden">
                    <div className="relative overflow-hidden bg-black aspect-video">
                    <img
                        src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                        alt="video thumbnail"
                        className="w-full object-cover"
                    />
                    <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                        <img
                        src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                        alt="play"
                        width={56}
                        height={56}
                        />
                    </span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
                    IELTS Course by Munzereen Shahid
                </h1>

                {/* Rating */}
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

                {/* Description */}
                <div className="text-gray-400">
                    <p className="whitespace-pre-wrap">
                    Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ।
                    </p>
                </div>
                </div>

                {/* Sidebar Section */}
                <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white right-0 md:absolute md:top-[50px]">
                <div className="md:sticky md:top-[112px] p-4 border">
                    {/* Desktop Video Preview */}
                    <div className="hidden md:block">
                    <div className="relative overflow-hidden bg-black aspect-video">
                        <img
                        src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                        alt="video thumbnail"
                        className="w-full object-cover"
                        />
                        <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                        <img
                            src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                            alt="play"
                            width={56}
                            height={56}
                        />
                        </span>
                    </div>
                    </div>

                    {/* Course Pricing */}
                    <div className="mt-4">
                    <div className="text-2xl font-semibold">৳3850</div>
                    <div className="flex items-center gap-2 text-base md:text-xl">
                        <del>৳5000</del>
                        <span className="text-green-600 font-semibold">1150 ৳ ছাড়</span>
                    </div>
                    <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md">
                        কোর্সটি কিনুন
                    </button>
                    </div>

                    {/* Course Features */}
                    <div className="mt-6">
                    <p className="text-xl font-semibold mb-4">এই কোর্সে যা থাকছে</p>
                    <ul className="space-y-3 text-gray-800">
                        <li>কোর্সটি করছেন ৩২৯৯৫ জন</li>
                        <li>সময় লাগবে ৫০ ঘন্টা</li>
                        <li>৫৪টি ভিডিও</li>
                        <li>১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট</li>
                        <li>৩৮টি লেকচার শিট</li>
                        <li>২৫টি ভিডিও লেকচার</li>
                        <li>১টি ফ্রি হার্ডকপি বই</li>
                        <li>ফেসবুক সাপোর্ট গ্রুপ</li>
                        <li>কোর্সের মেয়াদ আজীবন</li>
                    </ul>
                    </div>

                    {/* Support Info */}
                    <p className="mt-4 text-sm text-gray-400 text-center">
                    কোর্সটি সম্পর্কে বিস্তারিত জানতে <br />
                    <span className="text-green-600 underline cursor-pointer">
                        ফোন করুন (16910)
                    </span>
                    </p>
                </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Landingtwo
