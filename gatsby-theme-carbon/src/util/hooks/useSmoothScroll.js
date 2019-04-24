import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // eslint-disable-next-line global-require
    const SmoothScroll = require('smooth-scroll');
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      offset: 87, // height of both header bars
      topOnEmptyHash: false,
      clip: true,
    });

    if (window.location.hash) {
      const hashElement = document.querySelector(window.location.hash);
      if (hashElement.offsetTop) {
        window.scrollTo(0, hashElement.offsetTop);
      } else {
        // IE fallback
        scroll.animateScroll(hashElement);
      }
    }
  }, []);
};

export default useSmoothScroll;
