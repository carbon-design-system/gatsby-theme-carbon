import React, { useContext, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { SideNav, SideNavItems } from 'carbon-components-react';
import { useNavItems } from './LeftNavItemProvider';

import NavContext from '../../util/context/NavContext';
import LeftNavItem from './LeftNavItem';
import LeftNavResourceLinks from './ResourceLinks';

import LeftNavWrapper from './LeftNavWrapper';
import { sideNavDark } from './LeftNav.module.scss';

import { useNavScroll } from '../../util/hooks';

const LeftNav = (props) => {
  const { leftNavIsOpen, leftNavScrollOffset } = useContext(NavContext);
  const sideNavRef = useRef();

  useNavScroll(sideNavRef);

  useEffect(() => {
    const sideNav = sideNavRef.current.querySelector('ul.sidenav-list');
    sideNav.scrollTop = leftNavScrollOffset;
  }, [sideNavRef, leftNavScrollOffset]);

  const navItems = useNavItems();

  // TODO: replace old addon website styles with sass modules, move to wrapper
  return (
    <LeftNavWrapper expanded={leftNavIsOpen}>
      <SideNav
        ref={sideNavRef}
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
        <SideNavItems className="sidenav-list">
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
