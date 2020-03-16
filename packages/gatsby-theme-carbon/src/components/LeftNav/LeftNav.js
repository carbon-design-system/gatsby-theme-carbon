import React, { useContext } from 'react';
import classnames from 'classnames';
import { SideNav, SideNavItems } from 'carbon-components-react';
import { useNavItems } from './LeftNavItemProvider';

import NavContext from '../../util/context/NavContext';
import LeftNavItem from './LeftNavItem';
import LeftNavResourceLinks from './ResourceLinks';

import LeftNavWrapper from './LeftNavWrapper';
import { sideNavDark } from './LeftNav.module.scss';

const LeftNav = props => {
  const { leftNavIsOpen } = useContext(NavContext);

  const navItems = useNavItems();

  // TODO: replace old addon website styles with sass modules, move to wrapper
  return (
    <LeftNavWrapper expanded={leftNavIsOpen}>
      <SideNav
        expanded
        defaultExpanded
        aria-label="Side navigation"
        className={classnames({
          [sideNavDark]: props.theme === 'dark' || props.homepage,
          'bx--side-nav--website': true,
          'bx--side-nav--website--dark':
            props.theme === 'dark' || props.homepage,
          'bx--side-nav--website--light':
            props.theme !== 'dark' && !props.homepage,
        })}
      >
        <SideNavItems>
          {navItems.map((item, i) => (
            <LeftNavItem items={item.pages} category={item.title} key={i} />
          ))}
          <LeftNavResourceLinks />
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
