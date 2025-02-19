import { useState, useEffect, useLayoutEffect } from 'react';

let serverHandoffComplete = false;
let globalIndex = 0;

const genId = () => ++globalIndex;

// https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useId = (label) => {
  /*
   * If this instance isn't part of the initial render, we don't have to do the
   * double render/patch-up dance. We can just generate the ID and return it.
   */
  const initialId = serverHandoffComplete ? genId() : null;

  const [id, setId] = useState(initialId);

  useIsomorphicLayoutEffect(() => {
    if (id === null) {
      /*
       * Patch the ID after render. We do this in `useLayoutEffect` to avoid any
       * rendering flicker, though it'll make the first render slower (unlikely
       * to matter, but you're welcome to measure your app and let us know if
       * it's a problem).
       */
      setId(genId());
    }
  }, []);

  useEffect(() => {
    if (serverHandoffComplete === false) {
      /*
       * Flag all future uses of `useId` to skip the update dance. This is in
       * `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
       * accidentally bail out of the patch-up dance prematurely.
       */
      serverHandoffComplete = true;
    }
  }, []);
  return `gtc__${label}__${id}`;
};
