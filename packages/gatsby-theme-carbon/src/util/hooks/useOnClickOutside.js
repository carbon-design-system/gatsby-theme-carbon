import { useEffect } from 'react';

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

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener(
      'mousedown',
      listener,
      passiveListenerSupported ? { passive: true } : false
    );
    document.addEventListener(
      'touchstart',
      listener,
      passiveListenerSupported ? { passive: true } : false
    );

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
