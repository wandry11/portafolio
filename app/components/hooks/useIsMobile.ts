'use client'
import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint: number): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= breakpoint);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
