import React from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
} from 'carbon-components-react/lib/components/UIShell';
import SiteHeaderItem from './SiteHeaderItem';

// import LeftNavResourceLinks from '../LeftNav/ResourceLinks';

import { useNavItems } from '../LeftNav/LeftNavItemProvider';

const SiteHeader = ({ isNavExpanded, onToggleNav }) => {
  const navItems = useNavItems();

  return (
    <Header aria-label="IBM Platform Name">
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={onToggleNav}
        isActive={isNavExpanded}
      />
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        {navItems.map((item, i) => (
          <SiteHeaderItem items={item.pages} category={item.title} key={i} />
        ))}
        {/* <LeftNavResourceLinks /> */}
      </HeaderNavigation>
    </Header>
  );
};

SiteHeader.propTypes = {
  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  isNavExpanded: PropTypes.bool.isRequired,

  // /**
  //  * Specify whether the switcher is expanded or collapsed
  //  */
  // isSwitcherExpanded: PropTypes.bool.isRequired,

  // /**
  //  * Provide a function that is called when the toggle button is interacted
  //  * with. Useful for controlling the expansion state of the side navigation.
  //  */
  // onToggleNavNav: PropTypes.func.isRequired,

  // /**
  //  * Provide a function that is called when the toggle button is interacted
  //  * with. Useful for controlling the expansion state of the switcher.
  //  */
  // onToggleSwitcher: PropTypes.func.isRequired,
};

export default SiteHeader;
