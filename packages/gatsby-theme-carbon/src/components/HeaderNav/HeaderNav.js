import React from 'react';

import { HeaderNavigation } from 'carbon-components-react/lib/components/UIShell';
import HeaderNavItem from './HeaderNavItem';

import { useNavItems } from '../../util/NavItems';

const HeaderNav = () => {
  const navItems = useNavItems();

  return (
    <HeaderNavigation aria-label="Carbon Design System">
      {navItems.map(({pages, title}) => (
        <HeaderNavItem items={pages} category={title} key={title} />
      ))}
    </HeaderNavigation>
  );
};

export default HeaderNav;
