'use client'
import { useState, useEffect } from 'react';

const useResponsive = (breakpoint = 992) => {
  const [isTabletOrBelow, setIsTabletOrBelow] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrBelow(window.innerWidth <= breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isTabletOrBelow;
};

export default useResponsive;