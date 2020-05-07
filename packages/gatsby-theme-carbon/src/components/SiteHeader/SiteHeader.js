import React, { useContext } from 'react';
import classnames from 'classnames';

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
} from 'carbon-components-react/lib/components/UIShell';

import { SideNav, SideNavItems } from 'carbon-components-react';
import { useNavItems } from '../LeftNav/LeftNavItemProvider';

import NavContext from '../../util/context/NavContext';
import LeftNavItem from '../LeftNav/LeftNavItem';
import LeftNavResourceLinks from '../LeftNav/ResourceLinks';

import LeftNavWrapper from '../LeftNav/LeftNavWrapper';
import { sideNavDark } from '../LeftNav/LeftNav.module.scss';

const LeftNav = (props) => {
  const { leftNavIsOpen } = useContext(NavContext);

  const navItems = useNavItems();

  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        {navItems.map((item, i) => (
          <HeaderMenuItem items={item.pages} category={item.title} key={i}>
            {item.title}
          </HeaderMenuItem>
        ))}
        {/* <LeftNavResourceLinks /> */}
      </HeaderNavigation>
    </Header>
  );
};

export default LeftNav;
