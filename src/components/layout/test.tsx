import React from 'react';
import PreviewSliderContainer from '../ui/Slider/PreviewSlider/PreviewSliderContainer';
import CourseCardSection from '../common/CourseCardSection';
import Header from '../common/Header';

interface LayoutProps {
  children: React.ReactNode;
  mediaPreviewValues: any; // adjust as needed
  courseChecklistValues: any;
  ctaButtonValue: any;
}

const ProductLayout: React.FC<LayoutProps> = ({
  children,
  mediaPreviewValues,
  courseChecklistValues,
  ctaButtonValue,
}) => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black to-slate-900 pt-10 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            IELTS Course by Munzereen Shahid
          </h1>
          <p className="text-yellow-400 font-semibold text-base mb-1">
            ★★★★★ (81.8% শিক্ষার্থী কোর্স শেষে ৫ এর বেশি দিয়েছেন)
          </p>
          <p className="text-base md:text-lg max-w-3xl text-gray-200">
            Get complete preparation of Academic IELTS and General Training IELTS in one course! 
            Join our IELTS Course today to achieve your desired band score under the guidance of 
            the best IELTS Instructor in the country.
          </p>
        </div>

        {/* Floating Card (Desktop only) */}
        <div className="hidden md:block absolute right-10 top-10 z-10 w-[340px] lg:w-[390px]">
          <div className="bg-white rounded-lg p-3 shadow-lg border border-slate-200">
            <PreviewSliderContainer data={mediaPreviewValues} />
            <CourseCardSection
              checklist={courseChecklistValues}
              ctaButton={ctaButtonValue}
            />
          </div>
        </div>
      </div>

      {/* Mobile Preview & Course Card */}
      <div className="block md:hidden px-4">
        <PreviewSliderContainer data={mediaPreviewValues} />
        <CourseCardSection
          checklist={courseChecklistValues}
          ctaButton={ctaButtonValue}
        />
      </div>

      {/* Header Navigation (e.g., tabs or menu) */}
      <div className="bg-white text-black px-4 md:px-8 py-3 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex space-x-6 overflow-x-auto">
          <button className="text-sm font-medium whitespace-nowrap">Course instructor</button>
          <button className="text-sm font-medium whitespace-nowrap">How the course is laid out</button>
          <button className="text-sm font-medium whitespace-nowrap">What you will learn by doing the course</button>
        </div>
      </div>

      {/* Page-specific content */}
      <div className="bg-white text-black px-4 md:px-8 pt-6 pb-12">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
