import React from 'react';

import { HeaderNavigation } from 'carbon-components-react/lib/components/UIShell';
import HeaderNavItem from './HeaderNavItem';

import { useNavItems } from '../../util/NavItems';

const HeaderNav = () => {
  const navItems = useNavItems();

  return (
    <>
      <HeaderNavigation aria-label="Carbon Design System">
        {navItems.map((item, i) => (
          <HeaderNavItem items={item.pages} category={item.title} key={i} />
        ))}
      </HeaderNavigation>
    </>
  );
};

export default HeaderNav;
