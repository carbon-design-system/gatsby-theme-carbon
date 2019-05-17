import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import slugify from 'slugify';
import cx from 'classnames';
import {
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';

import { currentItem, currentItemText } from './LeftNav.module.scss';

import NavContext from '../../util/context/NavContext';

const LeftNavItem = props => {
  const { items, category } = props;
  const { toggleNavState } = useContext(NavContext);
  const closeLeftNav = () => toggleNavState('leftNavIsOpen', 'close');
  if (items.length === 1) {
    const isActive =
      typeof window !== 'undefined' &&
      window.location.pathname.includes(slugify(category, { lower: true }));
    return (
      <SideNavLink
        onClick={closeLeftNav}
        icon={<span>dummy icon</span>}
        element={Link}
        className={cx({ [currentItem]: isActive })}
        isActive={isActive}
        to={`${items[0].path}`}
      >
        <span className={cx({ [currentItemText]: isActive })}>{category}</span>
      </SideNavLink>
    );
  }

  return (
    <Location>
      {({ location }) => (
        <SideNavMenu
          icon={<span>dummy icon</span>}
          isActive={location.pathname.includes(
            slugify(category, { lower: true })
          )} // TODO similar categories
          defaultExpanded={location.pathname.includes(
            slugify(category, { lower: true })
          )}
          title={category}
        >
          <SubNavItems
            onClick={closeLeftNav}
            items={items}
            location={location}
          />
        </SideNavMenu>
      )}
    </Location>
  );
};

const SubNavItems = ({ items, location, onClick }) => {
  const isActive = item => {
    const titleSlug = slugify(item.title, { lower: true });
    return location.pathname.includes(titleSlug);
  };
  return items.map((item, i) => {
    const active = isActive(item);
    return (
      <SideNavMenuItem
        to={`${item.path}`}
        onClick={onClick}
        element={Link}
        isActive={active}
        key={i}
      >
        <span style={{ color: active ? '#171717' : 'inherit' }}>
          {item.title}
        </span>
      </SideNavMenuItem>
    );
  });
};

export default LeftNavItem;
