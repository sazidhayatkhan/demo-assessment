import React from 'react';
import PreviewSliderContainer from '../ui/Slider/PreviewSlider/PreviewSliderContainer';
import CourseCardSection from '../common/CourseCardSection';
import Header from '../common/Header';
import { Checklist } from '@/types/checklist';
import { CtaButtonModel } from '@/types/ctaButtonModel';
import { Media } from '@/types/media';


interface LayoutProps {
  children: React.ReactNode;
  mediaPreviewValues: Media[];
  courseChecklistValues: Checklist[];
  ctaButtonValue: CtaButtonModel;
  headerValue:any;
}

const ProductLayout: React.FC<LayoutProps> = ({
  children,
  mediaPreviewValues,
  courseChecklistValues,
  ctaButtonValue,
  headerValue
}) => {
  return (
    <div className="min-h-[300px]">
      <div className="relative container">
        {/* Mobile View */}
        <div className='bg-black'>
        <div className="block md:hidden p-4">
          <PreviewSliderContainer data={mediaPreviewValues} />
        </div>
            <Header headerValue={headerValue}/>
        </div>
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

        {/* Page-specific content */}
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
};

export default ProductLayout;
