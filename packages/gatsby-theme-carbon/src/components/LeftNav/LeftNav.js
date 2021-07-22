import React, { useContext, useRef, useEffect } from 'react';
import { SideNav, SideNavItems } from 'carbon-components-react';
import { useNavItems } from '../../util/NavItems';

import NavContext from '../../util/context/NavContext';
import LeftNavItem from './LeftNavItem';
import LeftNavResourceLinks from './ResourceLinks';

import LeftNavWrapper from './LeftNavWrapper';
import * as styles from './LeftNav.module.scss';
import useMetadata from '../../util/hooks/useMetadata';

const LeftNav = (props) => {
  const {
    leftNavIsOpen,
    leftNavScrollTop,
    setLeftNavScrollTop,
    toggleNavState,
  } = useContext(NavContext);

  const sideNavRef = useRef();
  const sideNavListRef = useRef();

  useEffect(() => {
    sideNavListRef.current = sideNavRef.current.querySelector('.sidenav-list');
  }, []);

  useEffect(() => {
    sideNavListRef.current.addEventListener('scroll', (e) => {
      setLeftNavScrollTop(e.target.scrollTop);
    });
  }, [setLeftNavScrollTop]);

  useEffect(() => {
    if (leftNavScrollTop >= 0 && !sideNavListRef?.current.scrollTop) {
      sideNavListRef.current.scrollTop = leftNavScrollTop;
    }
  }, [leftNavScrollTop]);

  const getLeftNavClassNames = () => {
    if (props.theme === 'dark') {
      return styles.sideNavDark;
    }
    return styles.sideNavWhite;
  };

  const navItems = useNavItems();
  const { navigationStyle } = useMetadata();

  const closeSwitcher = () => {
    toggleNavState('switcherIsOpen', 'close');
  };

  // TODO: replace old addon website styles with sass modules, move to wrapper
  return (
    <LeftNavWrapper
      expanded={leftNavIsOpen}
      onClick={closeSwitcher}
      onKeyPress={closeSwitcher}>
      <SideNav
        ref={sideNavRef}
        aria-label="Side navigation"
        expanded={navigationStyle ? leftNavIsOpen : true}
        defaultExpanded={!navigationStyle}
        isPersistent={!navigationStyle}
        className={getLeftNavClassNames()}>
        <SideNavItems className="sidenav-list">
          {navItems.map((item, i) => (
            <LeftNavItem
              items={item.pages}
              category={item.title}
              key={i}
              hasDivider={item.hasDivider}
            />
          ))}
          <LeftNavResourceLinks />
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
