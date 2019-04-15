import React, { useContext } from 'react';
import { WebsiteSwitcher } from '@carbon/addons-website';
import NavContext from '../../util/context/NavContext';
import links from './links';

const Switcher = () => {
  const { openState } = useContext(NavContext);
  return (
    <WebsiteSwitcher
      isSwitcherFinal={openState.switcher}
      isSwitcherOpen={openState.switcher}
      links={links}
    />
  );
};

export default Switcher;
