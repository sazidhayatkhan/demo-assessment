import React from "react";
import { Product, Section } from "@/types/product";
import CustomSlider from "@/components/ui/Slider/CustomSlider";
import InstructorSection from "./components/InstructorSection";
import CourseFeatureSection from "./components/CourseFeatureSection";
import EngagementSection from "./components/EngagementSection";
import CourseOutcomeSection from "./components/CourseOutcomeSection";
import AboutCourseSection from "./components/AboutCourseSection";
import CourseCard from "@/components/ui/Card/CourseCard";

type Props = {
  data: Product;
};

const ProductUI = ({ data }: Props) => {
  const generatedAt = new Date().toLocaleTimeString();

  const instructorSection: Section | undefined = data?.data?.sections.find(
    (section) => section.type === "instructors"
  );
  const courseFeaturesSection: Section | undefined = data?.data?.sections.find(
    (section) => section.type === "features"
  );
  const engagementSection: Section | undefined = data?.data?.sections.find(
    (section) => section.type === "group_join_engagement"
  );
  const courseOutcomeSection: Section | undefined = data?.data?.sections.find(
    (section) => section.type === "pointers"
  );
  const aboutCourseSection: Section | undefined = data?.data?.sections.find(
    (section) => section.type === "about"
  );

  const sliderValues = data?.data?.sections ?? [];
  const instructorValues = instructorSection ?? {};
  const courseFeatureValues = courseFeaturesSection ?? {};
  const engagementValues = engagementSection ?? {};
  const courseOutcomeValues = courseOutcomeSection ?? {};
  const aboutCourseValues = aboutCourseSection ?? {};

  return (
    <div className="bg-black h-[300px] md:h-[300px] relative">
        <div className="container">
          <div className="md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] min-h-[300px] md:min-h-[300px] flex items-center px-8">
            <div className="">
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
                  Academic IELTS এবং General Training IELTS- এর কমপ্লিট
                  প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর
                  গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন
                  করুন আমাদের IELTS Course-এ।
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-4 md:flex-row md:gap-12 px-8">
          <div className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <CustomSlider data={sliderValues} />
            <div className="space-y-8">
              <InstructorSection data={instructorValues} />
              <CourseFeatureSection data={courseFeatureValues} />
              <EngagementSection data={engagementValues} />
              <CourseOutcomeSection data={courseOutcomeValues} />
              <AboutCourseSection data={aboutCourseValues} />
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Last generated at: {generatedAt}
            </p>
          </div>
          <div className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white hidden"></div>
        </div>
    </div>
  );
};

export default ProductUI;
