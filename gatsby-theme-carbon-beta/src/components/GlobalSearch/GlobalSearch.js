import React, { useContext } from 'react';

import Search20 from '@carbon/icons-react/es/search/20';
import { HeaderGlobalAction } from 'carbon-components-react/lib/components/UIShell';
import GlobalSearchInput from './GlobalSearchInput';
import NavContext from '../Context/NavContext';

const GlobalSearch = () => {
  const { openState, toggleNav } = useContext(NavContext);

  if (openState.search) {
    return <GlobalSearchInput />;
  }

  return (
    <HeaderGlobalAction
      className="bx--header__action--search"
      aria-label="Search Website"
      onClick={() => {
        toggleNav('search', 'open');
        toggleNav('switcher', 'close');
      }}
    >
      <Search20 />
    </HeaderGlobalAction>
  );
};

export default GlobalSearch;
