'use client';

import React from 'react';

import Header from '../common/Header';
import CourseCardSection from '../common/CourseCardSection';
import PreviewSliderContainer from '../ui/Slider/PreviewSlider/PreviewSliderContainer';

import useStickyTrigger from '@/hooks/useStickyTrigger';

import { Checklist } from '@/types/checklist';
import { CtaButtonModel } from '@/types/ctaButtonModel';
import { Media } from '@/types/media';
import { HeaderModel } from '@/types/headerModel';

interface LayoutProps {
  children: React.ReactNode;
  mediaPreviewValues: Media[];
  courseChecklistValues: Checklist[];
  ctaButtonValue: CtaButtonModel;
  headerValue: HeaderModel;
}

const STICKY_SCROLL_TRIGGER = 600;

const ProductLayout: React.FC<LayoutProps> = ({
  children,
  mediaPreviewValues,
  courseChecklistValues,
  ctaButtonValue,
  headerValue,
}) => {
  const showStickySection = useStickyTrigger(STICKY_SCROLL_TRIGGER);

  return (
    <div className="min-h-[300px]">
      <div className="relative container">

        {/* Mobile Header + Preview Slider */}
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg_img.jpeg')" }}
        >
          <div className="block md:hidden p-4">
            <PreviewSliderContainer data={mediaPreviewValues} />
          </div>
          <Header headerValue={headerValue} />
        </div>

        {/* Mobile Course Card */}
        <div className="block md:hidden">
          <CourseCardSection
            checklist={courseChecklistValues}
            ctaButton={ctaButtonValue}
          />
        </div>

        {/* Desktop Floating Card (Before Scroll Trigger) */}
        {!showStickySection && (
          <div className="hidden md:block w-full md:max-w-[330px] lg:max-w-[390px] absolute right-12 md:top-[55px]">
            <div className="bg-white p-1 border border-slate-300">
              <PreviewSliderContainer data={mediaPreviewValues} />
              <CourseCardSection
                checklist={courseChecklistValues}
                ctaButton={ctaButtonValue}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="pt-4 bg-white">
          <div className="container flex flex-col gap-4 md:flex-row md:gap-12 px-4 md:px-12">
            <main className="flex-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
              {children}
            </main>

            {/* Desktop Sticky Card (After Scroll Trigger) */}
            <aside className="w-full md:max-w-[330px] lg:max-w-[400px]">
              {showStickySection && (
                <div className="hidden md:block sticky top-[110px] z-10 border border-slate-300">
                  <CourseCardSection
                    checklist={courseChecklistValues}
                    ctaButton={ctaButtonValue}
                  />
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
