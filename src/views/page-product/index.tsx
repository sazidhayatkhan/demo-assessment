import React from "react";
import { Product, Section } from "@/types/product";
import CustomSlider from "@/components/ui/Slider/CustomSlider";
import InstructorSection from "./components/InstructorSection";
import CourseFeatureSection from "./components/CourseFeatureSection";
import EngagementSection from "./components/EngagementSection";
import CourseOutcomeSection from "./components/CourseOutcomeSection";
import AboutCourseSection from "./components/AboutCourseSection";
import ProductLayout from "@/components/layout/ProductLayout";
import SectionScroller from "@/components/ui/SectionScroller";

type Props = {
  data: Product;
};

const ProductUI = ({ data }: Props) => {
  const generatedAt = new Date().toLocaleTimeString();
  const sections = data?.data?.sections ?? [];

  const findSection = (type: string): Section | undefined =>
    sections.find((section) => section.type === type);

  const instructorSection = findSection("instructors");
  const courseFeaturesSection = findSection("features");
  const engagementSection = findSection("group_join_engagement");
  const courseOutcomeSection = findSection("pointers");
  const aboutCourseSection = findSection("about");

  const headerValue = data?.data ?? {};
  const mediaPreviewValues = data?.data?.media ?? [];
  const courseChecklistValues = data?.data?.checklist ?? [];
  const ctaButtonValue = data?.data?.cta_text ?? {};

  return (
    <ProductLayout
      headerValue={headerValue}
      mediaPreviewValues={mediaPreviewValues}
      courseChecklistValues={courseChecklistValues}
      ctaButtonValue={ctaButtonValue}
    >
      <SectionScroller />
      <div className="hidden md:block sticky top-[60px] z-10 bg-white py-3 mb-6">
        <CustomSlider data={sections} />
      </div>

      <div className="mt-4 md:mt-0 space-y-8">
        {instructorSection && (
          <div id={instructorSection.name}>
            <InstructorSection data={instructorSection} />
          </div>
        )}

        {courseFeaturesSection && (
          <div id={courseFeaturesSection.name}>
            <CourseFeatureSection data={courseFeaturesSection} />
          </div>
        )}

        {engagementSection && (
          <div id={engagementSection.name}>
            <EngagementSection data={engagementSection} />
          </div>
        )}

        {courseOutcomeSection && (
          <div id={courseOutcomeSection.name}>
            <CourseOutcomeSection data={courseOutcomeSection} />
          </div>
        )}

        {aboutCourseSection && (
          <div id={aboutCourseSection.name}>
            <AboutCourseSection data={aboutCourseSection} />
          </div>
        )}
      </div>
      <p className="text-sm text-gray-400 mt-4">
        Last generated at: {generatedAt}
      </p>
    </ProductLayout>
  );
};

export default ProductUI;
