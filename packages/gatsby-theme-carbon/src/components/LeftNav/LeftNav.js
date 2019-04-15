import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import {
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react/lib/components/UIShell';

import Launch16 from '@carbon/icons-react/es/launch/16';
import NavContext from '../../util/context/NavContext';
import LeftNavItem from './LeftNavItem';
import { useOnClickOutside, useWindowSize } from '../../util/hooks';

import LeftNavWrapper from './LeftNavWrapper';

const LeftNav = props => {
  console.log('navprops', props);
  const { openState, toggleNav } = useContext(NavContext);
  const windowSize = useWindowSize();

  if (windowSize.innerWidth > 1056 && !openState.leftNav) {
    toggleNav('leftNav', 'open');
  }

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

  return (
    <LeftNavWrapper expanded={openState.leftNav} homepage={props.homepage}>
      <SideNav
        isExpanded={openState.leftNav}
        aria-label="Side navigation"
        className={classnames({
          'bx--side-nav--website': true,
          'bx--side-nav--website--light': !props.homepage,
        })}
      >
        <SideNavItems>
          {renderNavItems()}
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
    </LeftNavWrapper>
  );
};

export default LeftNav;
