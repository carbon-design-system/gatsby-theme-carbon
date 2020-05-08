import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import cx from 'classnames';
import { SideNavLink } from 'carbon-components-react';

import {
  HeaderMenu,
  HeaderMenuItem,
} from 'carbon-components-react/lib/components/UIShell';
import styles, { currentItem } from './SiteHeader.module.scss';

import NavContext from '../../util/context/NavContext';
import usePathprefix from '../../util/hooks/usePathprefix';

const SiteHeaderItem = (props) => {
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

        const isActive = items.some(
          (item) => item.path.split('/')[1] === pathname.split('/')[1]
        );

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
              {category}
            </SideNavLink>
          );
        }
        return (
          <HeaderMenu
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
            {console.log(items)}
          </HeaderMenu>
        );
      }}
    </Location>
  );
};

const SubNavItems = ({ items, pathname, onClick }) =>
  items.map((item, i) => {
    const hasActiveTab =
      item.path.split('/') > 3
        ? item.path.split('/')[3] === pathname.split('/')[3]
        : item.path.split('/')[2] === pathname.split('/')[2];

    return (
      <HeaderMenuItem
        to={`${item.path}`}
        className={cx({
          [styles.linkText__dark]: pathname === '/',
        })}
        onClick={onClick}
        element={Link}
        isActive={hasActiveTab}
        key={i}
      >
        <span
          className={cx(styles.linkText, {
            [styles.linkText__active]: hasActiveTab,
          })}
        >
          {item.title}
        </span>
      </HeaderMenuItem>
    );
  });

export default SiteHeaderItem;
