import { useState, useEffect } from 'react';

const initialValue = {
  innerWidth: null,
  innerHeight: null,
  outerWidth: null,
  outerHeight: null,
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(initialValue);

  function fetchWindowDimensionsAndSave() {
    setWindowSize({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    });
  }

  // run on mount
  useEffect(() => {
    // run only once
    fetchWindowDimensionsAndSave();
  }, []);

  // set resize handler once on mount and clean before unmount
  useEffect(() => {
    window.addEventListener('resize', fetchWindowDimensionsAndSave);
    return () => {
      window.removeEventListener('resize', fetchWindowDimensionsAndSave);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
