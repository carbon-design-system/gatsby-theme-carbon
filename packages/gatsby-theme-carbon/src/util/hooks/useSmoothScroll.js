import { useLayoutEffect } from 'react';

const useSmoothScroll = () => {
  useLayoutEffect(() => {
    // eslint-disable-next-line global-require
    const SmoothScroll = require('smooth-scroll');
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      offset: 87,
      clip: true,
    });

    if (window.location.hash) {
      const hash = window.decodeURI(window.location.hash.replace('#', ''));
      if (hash !== '') {
        const element = document.getElementById(hash);
        if (element && element.offsetTop) {
          const offset = element.offsetTop;
          window.scrollTo(0, offset);
        } else {
          scroll.animateScroll(element); // IE fallback
        }
      }
    }
  }, []);
};

export default useSmoothScroll;
