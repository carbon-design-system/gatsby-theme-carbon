import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import cx from 'classnames';
import {
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';

import { currentItem, currentItemText } from './LeftNav.module.scss';

import NavContext from '../../util/context/NavContext';
import usePathprefix from '../../util/hooks/usePathprefix';

const LeftNavItem = props => {
  const { items, category } = props;
  const { toggleNavState } = useContext(NavContext);
  const closeLeftNav = () => toggleNavState('leftNavIsOpen', 'close');
  const pathPrefix = usePathprefix();
  return (
    <Location>
      {({ location }) => {
        const pathname = pathPrefix
          ? location.pathname.replace(pathPrefix, '')
          : location.pathname;
        const isActive = items.some(item => pathname === item.path);
        if (items.length === 1) {
          return (
            <SideNavLink
              onClick={closeLeftNav}
              icon={<span>dummy icon</span>}
              element={Link}
              className={cx({ [currentItem]: isActive })}
              isActive={isActive}
              to={`${items[0].path}`}
            >
              <span className={cx({ [currentItemText]: isActive })}>
                {category}
              </span>
            </SideNavLink>
          );
        }
        return (
          <SideNavMenu
            icon={<span>dummy icon</span>}
            isActive={isActive} // TODO similar categories
            defaultExpanded={isActive}
            title={category}
          >
            <SubNavItems
              onClick={closeLeftNav}
              items={items}
              pathname={pathname}
            />
          </SideNavMenu>
        );
      }}
    </Location>
  );
};

const SubNavItems = ({ items, pathname, onClick }) =>
  items.map((item, i) => (
    <SideNavMenuItem
      to={`${item.path}`}
      onClick={onClick}
      element={Link}
      isActive={pathname === item.path}
      key={i}
    >
      <span
        style={{
          color: pathname === item.path ? '#171717' : 'inherit',
        }}
      >
        {item.title}
      </span>
    </SideNavMenuItem>
  ));

export default LeftNavItem;
