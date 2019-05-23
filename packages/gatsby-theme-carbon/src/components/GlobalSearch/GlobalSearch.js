import React, { useContext } from 'react';

import Search20 from '@carbon/icons-react/es/search/20';
import { HeaderGlobalAction } from 'carbon-components-react/lib/components/UIShell';

import GlobalSearchInput from './GlobalSearchInput';
import NavContext from '../../util/context/NavContext';
import useSearch from '../../util/hooks/useSearch';

const GlobalSearch = () => {
  // This is a presentational component only. If you'd like to implement search
  // functionality, set the isSearchEnabled option for gatsby-theme-carbon to true
  // and shadow the useSearch hook in /src/util/hooks with your library and credentials.
  //
  // A dummy useSearch has been provided to demonstrate implementation using Algolia.
  // https://www.algolia.com/

  const { searchIsOpen, toggleNavState } = useContext(NavContext);
  useSearch();

  if (searchIsOpen) {
    return <GlobalSearchInput />;
  }

  return (
    <HeaderGlobalAction
      className="bx--header__action--search"
      aria-label="Search Website"
      onClick={() => {
        toggleNavState('searchIsOpen', 'open');
        toggleNavState('switcherIsOpen', 'close');
      }}
    >
      <Search20 />
    </HeaderGlobalAction>
  );
};

export default GlobalSearch;
