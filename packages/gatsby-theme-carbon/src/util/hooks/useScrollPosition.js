import { useState, useEffect } from 'react';
import { throttle as _throttle } from 'lodash';

let passiveListenerSupported;

try {
  const opts = Object.defineProperty({}, 'passive', {
    // eslint-disable-next-line getter-return
    get() {
      passiveListenerSupported = true;
    },
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {
  passiveListenerSupported = false;
}

const getPosition = () => {
  if (typeof window !== 'undefined') {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };
  }
  return {
    x: null,
    y: null,
  };
};

const defaultOptions = {
  throttle: 100,
};

const useScrollPosition = options => {
  const _options = { ...defaultOptions, ...options };

  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handleScroll = _throttle(() => {
      setPosition(getPosition());
    }, _options.throttle);

    window.addEventListener(
      'scroll',
      handleScroll,
      passiveListenerSupported ? { passive: true } : false
    );

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [_options.throttle]);

  return position;
};

export default useScrollPosition;
