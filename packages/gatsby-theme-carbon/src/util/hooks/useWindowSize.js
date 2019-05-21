import { useState, useEffect } from 'react';
import { throttle as _throttle } from 'lodash';

const initialValue = {
  innerWidth: null,
  innerHeight: null,
  outerWidth: null,
  outerHeight: null,
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(initialValue);

  const fetchWindowDimensionsAndSave = _throttle(() => {
    setWindowSize({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    });
  }, 100);

  // run on mount
  useEffect(() => {
    // run only once
    fetchWindowDimensionsAndSave();
  }, [fetchWindowDimensionsAndSave]);

  // set resize handler once on mount and clean before unmount
  useEffect(() => {
    window.addEventListener('resize', fetchWindowDimensionsAndSave);
    return () => {
      window.removeEventListener('resize', fetchWindowDimensionsAndSave);
    };
  }, [fetchWindowDimensionsAndSave]);

  return windowSize;
}

export default useWindowSize;
