import { useEffect } from 'react';

const useDocSearch = () => {
  useEffect(() => {
    if (
      typeof window === `undefined` || // eslint-disable-line no-undef
      typeof window.docsearch === `undefined` // eslint-disable-line no-undef
    ) {
      console.warn(`Search has failed to load and now is being disabled`);
    } else {
      // eslint-disable-next-line no-undef
      window.docsearch({
        apiKey: `296ea0c1d0e96b2b04900d0f4d1a6329`,
        indexName: `carbondesignsystem`,
        inputSelector: `#doc-search`,
        // set this to true if you need to debug css
        debug: false,
      });
    }
  }, []);
};

export default useDocSearch;
