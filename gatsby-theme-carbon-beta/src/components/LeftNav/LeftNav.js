import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import {
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react/lib/components/UIShell';

import Launch16 from '@carbon/icons-react/es/launch/16';
import NavContext from '../Context/NavContext';
import LeftNavItem from './LeftNavItem';
import { useOnClickOutside } from '../Hooks';

const LeftNav = props => {
  const {
    openState,
    toggleNav,
    // expandedCategories,
    // toggleCategory,
  } = useContext(NavContext);
  const data = useStaticQuery(graphql`
    query LEFT_NAV_QUERY {
      allFile {
        edges {
          node {
            relativeDirectory
            name
            ext
            childMdx {
              frontmatter {
                title
                hidden
              }
            }
          }
        }
      }
    }
  `);
  const sideNavRef = useRef(null);
  useOnClickOutside(sideNavRef, () => toggleNav('leftNav', 'close'));

  const nodes = data.allFile.edges.map(edge => edge.node);
  const topLevelNavItems = Array.from(
    new Set(nodes.map(node => node.relativeDirectory.split('/')[0]))
  );

  const renderNavItems = () => {
    // items with category '' (no sub items) will go last
    const sortedTopNavItems = topLevelNavItems.sort((a, b) => a < b);
    return sortedTopNavItems.map((item, i) => (
      <LeftNavItem
        items={nodes.filter(
          node => node.relativeDirectory.split('/')[0] === item
        )}
        category={item}
        key={i}
      />
    ));
  };

  const { is404Page } = props;

  const navItems = renderNavItems();

  const classNames = classnames('side-nav', {
    'side-nav__closed': !openState.leftNav,
    'bx--side-nav--website--light':
      window.location.pathname !== '/' &&
      window.location.pathname !== '/design/product/' &&
      !is404Page,
    'bx--side-nav--website': true,
  });

  return (
    <div ref={sideNavRef}>
      <SideNav aria-label="Side navigation" className={classNames}>
        <SideNavItems>
          {navItems}
          <hr className="bx--side-nav__divider" />
          <SideNavLink
            icon={<Launch16 />}
            href="https://github.com/ibm/carbon-design-kit"
            className="bx--side-nav--website-link"
          >
            Design Kit
          </SideNavLink>
          <SideNavLink
            icon={<Launch16 />}
            to="/resources#github-repos"
            className="bx--side-nav--website-link"
            element={Link}
          >
            GitHub Repos
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </div>
  );
};

export default LeftNav;
