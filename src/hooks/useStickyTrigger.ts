'use client'
import { useEffect, useState } from 'react';
/**
 * A hook that tracks whether the page has been scrolled past a given Y offset.
 * @param triggerPoint - The vertical scroll threshold in pixels.
 * @returns `true` if scrollY > triggerPoint, otherwise `false`.
 */

const useStickyTrigger = (triggerPoint: number): boolean => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPoint]);

  return isSticky;
};

export default useStickyTrigger;
