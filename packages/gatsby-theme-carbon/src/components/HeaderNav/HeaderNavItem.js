import React, { useContext } from 'react';

import { Link } from 'gatsby';
import { Location } from '@reach/router';
import cx from 'classnames';

import { HeaderMenu, HeaderMenuItem } from '@carbon/react';
import * as styles from './HeaderNavItem.module.scss';

import NavContext from '../../util/context/NavContext';
import usePathprefix from '../../util/hooks/usePathprefix';

const HeaderNavItem = (props) => {
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
            <HeaderMenuItem
              className={cx({ [styles.currentPage]: isActive })}
              onClick={closeLeftNav}
              icon={<span>dummy icon</span>}
              element={Link}
              isActive={isActive}
              to={`${items[0].path}`}
              isCurrentPage={isActive}>
              {category}
            </HeaderMenuItem>
          );
        }
        return (
          <HeaderMenu
            className={cx({ [styles.currentPageAccordion]: isActive })}
            icon={<span>dummy icon</span>}
            isActive={isActive} // TODO similar categories
            defaultExpanded={isActive}
            title={category}
            role="menuitem"
            menuLinkName={category}>
            <TabItems
              onClick={closeLeftNav}
              items={items}
              pathname={pathname}
            />
          </HeaderMenu>
        );
      }}
    </Location>
  );
};

const TabItems = ({ items, pathname, onClick }) =>
  items.map((item, i) => {
    const hasActiveTab =
      item.path.split('/') > 3
        ? item.path.split('/')[3] === pathname.split('/')[3]
        : item.path.split('/')[2] === pathname.split('/')[2];

    return (
      <HeaderMenuItem
        to={`${item.path}`}
        className={cx(
          {
            [styles.border]: hasActiveTab === true,
          },
          styles.menuItem
        )}
        onClick={onClick}
        element={Link}
        isActive={hasActiveTab}
        key={i}
        isCurrentPage={hasActiveTab}>
        <span>{item.title}</span>
      </HeaderMenuItem>
    );
  });

export default HeaderNavItem;
