import { useState, useEffect } from 'react';
import _throttle from 'lodash.throttle';

const getWindowSize = () => {
  if (typeof window !== 'undefined') {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    };
  }
  return {
    innerWidth: null,
    innerHeight: null,
    outerWidth: null,
    outerHeight: null,
  };
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  // run on mount
  useEffect(() => {
    setWindowSize(getWindowSize());
  }, []);

  // set resize handler once on mount and clean before unmount
  useEffect(() => {
    const handleResize = _throttle(() => {
      setWindowSize(getWindowSize());
    }, 100);
    window.addEventListener('resize', handleResize);

    return () => {
      handleResize.cancel();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
