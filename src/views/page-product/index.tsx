import React from "react";
import { Product, Section } from "@/types/product";
import CustomSlider from "@/components/ui/Slider/CustomSlider";
import InstructorSection from "./components/InstructorSection";
import CourseFeatureSection from "./components/CourseFeatureSection";
import EngagementSection from "./components/EngagementSection";
import CourseOutcomeSection from "./components/CourseOutcomeSection";
import AboutCourseSection from "./components/AboutCourseSection";
import CourseCard from "@/components/ui/Card/CourseCard";
import Header from "./components/Header";

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
      <>
      <Header/>
      <div className="container flex flex-col gap-4 md:flex-row md:gap-12 px-8">
        <div className="flex-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <div className="sticky top-[61px] z-10 bg-white py-3 mb-10">
            <CustomSlider data={sliderValues} />
          </div>
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

        <div className="hidden w-full md:max-w-[330px] lg:max-w-[400px] bg-white"></div>
      </div>
      </>
  );
};

export default ProductUI;
