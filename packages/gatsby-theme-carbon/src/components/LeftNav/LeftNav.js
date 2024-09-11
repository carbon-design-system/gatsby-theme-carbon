import React, {
  useContext,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { SideNav, SideNavItems } from '@carbon/react';
import { useNavItems } from '../../util/NavItems';

import NavContext from '../../util/context/NavContext';
import LeftNavItem from './LeftNavItem';
import LeftNavResourceLinks from './ResourceLinks';

import LeftNavWrapper from './LeftNavWrapper';
import * as styles from './LeftNav.module.scss';
import useMetadata from '../../util/hooks/useMetadata';
import LeftNavTree from './LeftNavTree';

const LeftNav = (props) => {
  const {
    leftNavIsOpen,
    leftNavScrollTop,
    setLeftNavScrollTop,
    toggleNavState,
    pathPrefix,
  } = useContext(NavContext);

  const [isTreeView, setIsTreeView] = useState();

  const sideNavRef = useRef();
  const sideNavListRef = useRef();

  const navItems = useNavItems();

  const hasNestedLevels = useCallback(() => {
    let nestedLevels = false;

    navItems.forEach((navItem) => {
      navItem.pages?.forEach((levelTwoNavItem) => {
        if (levelTwoNavItem.pages && levelTwoNavItem.pages.length > 1) {
          nestedLevels = true;
        }
        // if it is branch node with only one leaf node, convert it to a leaf node
        else if (levelTwoNavItem.pages && levelTwoNavItem.pages.length) {
          levelTwoNavItem.path = levelTwoNavItem.pages[0].path;
          levelTwoNavItem.pages = null;
        }
      });
    });
    return nestedLevels;
  }, [navItems]);

  useEffect(() => {
    setIsTreeView(hasNestedLevels());
  }, [navItems]);

  useEffect(() => {
    if (!isTreeView) {
      sideNavListRef.current =
        sideNavRef.current.querySelector('.sidenav-list');
    }
  }, [isTreeView]);

  useEffect(() => {
    if (!isTreeView) {
      sideNavListRef.current.addEventListener('scroll', (e) => {
        setLeftNavScrollTop(e.target.scrollTop);
      });
    }
  }, [setLeftNavScrollTop, isTreeView]);

  useEffect(() => {
    if (!isTreeView) {
      if (leftNavScrollTop >= 0 && !sideNavListRef?.current.scrollTop) {
        sideNavListRef.current.scrollTop = leftNavScrollTop;
      }
    }
  }, [leftNavScrollTop, isTreeView]);

  const getLeftNavClassNames = () => {
    if (props.theme === 'dark') {
      return styles.sideNavDark;
    }
    return styles.sideNavWhite;
  };

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
      {isTreeView ? (
        <LeftNavTree
          items={navItems}
          theme={props.theme}
          pathPrefix={pathPrefix}
        />
      ) : (
        <SideNav
          ref={sideNavRef}
          aria-label="Side navigation"
          expanded={navigationStyle ? leftNavIsOpen : true}
          defaultExpanded={!navigationStyle}
          isPersistent={!navigationStyle}
          className={getLeftNavClassNames()}>
          <SideNavItems className="sidenav-list">
            {typeof isTreeView !== 'undefined' &&
              navItems.map((item, i) => (
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
      )}
    </LeftNavWrapper>
  );
};

export default LeftNav;
