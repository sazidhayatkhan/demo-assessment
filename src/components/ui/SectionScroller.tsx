'use client';
import { useEffect } from 'react';
import { useSectionStore } from '@/store/sectionStore';

const SectionScroller = () => {
  const setActiveSection = useSectionStore((state) => state.setActiveSection);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section-name]');

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.5
        );
        if (visible) {
          const id = visible.target.getAttribute('data-section-name');
          if (id) setActiveSection(id);
        }
      },
      {
        rootMargin: '-200px 0px -50% 0px', // 200px top offset
        threshold: [0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return null;
};

export default SectionScroller;
