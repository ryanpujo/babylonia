import { useEffect, useState } from 'react';
type WindowSize = {
  width: number;
  height: number;
};
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>();
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
