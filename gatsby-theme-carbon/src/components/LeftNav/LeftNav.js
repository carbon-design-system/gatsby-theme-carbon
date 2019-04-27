import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';

import {
  SideNav,
  SideNavItems,
} from 'carbon-components-react/lib/components/UIShell';

import NavContext from '../../util/context/NavContext';
import LeftNavItem from './LeftNavItem';
import LeftNavResourceLinks from './ResourceLinks';
import { useOnClickOutside, useWindowSize } from '../../util/hooks';

import LeftNavWrapper from './LeftNavWrapper';

const LeftNav = props => {
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);
  const windowSize = useWindowSize();

  if (windowSize.innerWidth > 1056 && !leftNavIsOpen) {
    toggleNavState('leftNavIsOpen', 'open');
  }

  const {
    allNavItemsYaml: { edges },
  } = useStaticQuery(graphql`
    query LEFT_NAV_QUERY {
      allNavItemsYaml {
        edges {
          node {
            title
            pages {
              title
              path
            }
          }
        }
      }
    }
  `);

  const navItems = edges.map(({ node }) => node);
  const sideNavRef = useRef(null);
  useOnClickOutside(sideNavRef, () => toggleNavState('leftNavIsOpen', 'close'));

  const renderNavItems = () =>
    navItems.map((item, i) => (
      <LeftNavItem items={item.pages} category={item.title} key={i} />
    ));

  return (
    <LeftNavWrapper expanded={leftNavIsOpen} homepage={props.homepage}>
      <SideNav
        isExpanded={leftNavIsOpen}
        aria-label="Side navigation"
        className={classnames({
          'bx--side-nav--website': true,
          'bx--side-nav--website--light': !props.homepage,
        })}
      >
        <SideNavItems>
          {renderNavItems()}
          <LeftNavResourceLinks />
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
