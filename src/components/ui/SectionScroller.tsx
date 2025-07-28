'use client';
import { useEffect } from 'react';
import { useSectionStore } from '@/store/sectionStore';

const SectionScroller = () => {
  const activeSection = useSectionStore((state) => state.activeSection);

  useEffect(() => {
    if (!activeSection) return;

    const el = document.getElementById(activeSection);
    if (el) {
      const rect = el.getBoundingClientRect();
      const offsetTop = window.scrollY + rect.top - 200;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }, [activeSection]);

  return null;
};

export default SectionScroller;
