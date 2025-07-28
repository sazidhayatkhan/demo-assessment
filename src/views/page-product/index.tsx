import React from "react";
import { Product, Section } from "@/types/product";
import CustomSlider from "@/components/ui/Slider/CustomSlider";
import InstructorSection from "./components/InstructorSection";
import CourseFeatureSection from "./components/CourseFeatureSection";
import EngagementSection from "./components/EngagementSection";
import CourseOutcomeSection from "./components/CourseOutcomeSection";
import AboutCourseSection from "./components/AboutCourseSection";
import Header from "./components/Header";
import PreviewSliderContainer from "@/components/ui/Slider/PreviewSlider/PreviewSliderContainer";
import CourseCardSection from "./components/CourseCardSection";

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
  const mediaPreviewValues = data?.data?.media ?? [];
  const courseChecklistValues = data?.data?.checklist ?? [];
  const ctaButtonValue = data?.data?.cta_text ?? {};

  return (
    <>
      <div className="bg-black min-h-[300px]">
        <div className="relative container">
          {/* Mobile View */}
          <div className="block md:hidden p-4">
            <PreviewSliderContainer data={mediaPreviewValues} />
          </div>
          <Header />
          <div className="block md:hidden">
            <CourseCardSection
              checklist={courseChecklistValues}
              ctaButton={ctaButtonValue}
            />
          </div>

          {/* Desktop View */}
          <div className="hidden md:block w-full md:max-w-[330px] lg:max-w-[390px] absolute right-9 md:top-[55px]">
            <div className="bg-white p-1 border border-slate-300">
              <PreviewSliderContainer data={mediaPreviewValues} />
              <CourseCardSection
                checklist={courseChecklistValues}
                ctaButton={ctaButtonValue}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-4 md:flex-row md:gap-12 px-4 md:px-12">
        <div className="flex-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <div className="hidden md:block sticky top-[62px] z-10 bg-white py-3 mb-6">
            <CustomSlider data={sliderValues} />
          </div>
          <div className="mt-4 md:mt-0 space-y-8">
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
        <div className="hidden w-full md:max-w-[330px] lg:max-w-[390px] bg-white"></div>
      </div>
    </>
  );
};

export default ProductUI;
