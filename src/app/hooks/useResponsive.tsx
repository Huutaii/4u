import { useState, useEffect } from 'react';

const useResponsive = (breakpoint = 992) => {
  const isClient = typeof window !== 'undefined';
  const [isTabletOrBelow, setIsTabletOrBelow] = useState(
    isClient ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setIsTabletOrBelow(window.innerWidth <= breakpoint);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint, isClient]);

  return isTabletOrBelow;
};

export default useResponsive;