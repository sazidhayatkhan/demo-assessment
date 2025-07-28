import React from "react";
import { Product, Section } from "@/types/product";
import CustomSlider from "@/components/ui/Slider/CustomSlider";
import InstructorSection from "./components/InstructorSection";
import CourseFeatureSection from "./components/CourseFeatureSection";
import EngagementSection from "./components/EngagementSection";
import CourseOutcomeSection from "./components/CourseOutcomeSection";
import AboutCourseSection from "./components/AboutCourseSection";
import ProductLayout from "@/components/layout/ProductLayout";

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
  const headerValue = data?.data ?? {};

  return (
    <ProductLayout
      headerValue={headerValue}
      mediaPreviewValues={mediaPreviewValues}
      courseChecklistValues={courseChecklistValues}
      ctaButtonValue={ctaButtonValue}
    >
      <div className="hidden md:block sticky top-[60px] z-10 bg-white py-3 mb-6">
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
    </ProductLayout>
  );
};

export default ProductUI;
