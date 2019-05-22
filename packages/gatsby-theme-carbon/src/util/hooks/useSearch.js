import { useEffect } from 'react';
// This is an example of how you'd hook into algolia for site-wide search
// https://www.algolia.com/

const useAlgoliaSearch = () => {
  useEffect(() => {
    if (
      typeof window === `undefined` ||
      typeof window.docsearch === `undefined`
    ) {
      console.warn(`Search has failed to load and now is being disabled`);
    } else {
      window.docsearch({
        apiKey: `ALGOLIA_KEY`,
        indexName: `ALGOLIA_INDEX`,
        inputSelector: `#doc-search`,
        // set this to true if you need to debug css
        debug: false,
      });
    }
  });
};

export default useAlgoliaSearch;
