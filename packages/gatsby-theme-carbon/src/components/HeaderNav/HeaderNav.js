import React from 'react';

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
} from 'carbon-components-react/lib/components/UIShell';
import HeaderNavItem from './HeaderNavItem';

import { useNavItems } from '../LeftNav/LeftNavItemProvider';

const HeaderNav = ({ isNavExpanded, onToggleNav }) => {
  const navItems = useNavItems();

  return (
    <Header aria-label="IBM Platform Name">
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={onToggleNav}
        isActive={isNavExpanded}
      />
      <HeaderName href="#" prefix="Carbon">
        Design System
      </HeaderName>
      <HeaderNavigation aria-label="Carbon Design System">
        {navItems.map((item, i) => (
          <HeaderNavItem items={item.pages} category={item.title} key={i} />
        ))}
      </HeaderNavigation>
    </Header>
  );
};

export default HeaderNav;
