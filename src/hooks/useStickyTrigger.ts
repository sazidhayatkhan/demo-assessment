'use client';
import { useEffect, useState } from 'react';

const useStickyTrigger = (triggerPoint: number): [boolean, boolean] => {
  const [isSticky, setIsSticky] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > triggerPoint);
      setIsReady(true);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPoint]);

  return [isSticky, isReady];
};

export default useStickyTrigger;
