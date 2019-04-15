import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import { uniqBy } from 'lodash';

import {
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';

export default class LeftNavItem extends React.Component {
  static propTypes = {
    /**
     * The data structure for the nav item.
     */
    item: PropTypes.shape({
      title: PropTypes.string,
    }),
  };

  state = {
    open: false,
  };

  toggleSubNav = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  renderSubNavItems = (items, location) => {
    const subItems = uniqBy(items, 'relativeDirectory');
    return subItems.map((item, i) => {
      const slug = `/${item.relativeDirectory}/${item.name}`;

      const isActive = () => {
        if (item.relativeDirectory.includes('/')) {
          return location.pathname.includes(item.relativeDirectory);
        }
        return location.pathname === slug;
      };

      const active = isActive();

      return (
        <SideNavMenuItem to={slug} element={Link} isActive={active} key={i}>
          <span style={{ color: active ? '#171717' : 'inherit' }}>
            {item.childMdx.frontmatter.title}
          </span>
        </SideNavMenuItem>
      );
    });
  };

  render() {
    const { items, category } = this.props;
    if (category === '') {
      return items.map((item, i) =>
        item.name === 'index' ? null : (
          <SideNavLink
            element={Link}
            key={i}
            activeClassName="bx--side-nav__link--current"
            to={item.name}
          >
            {item.childMdx.frontmatter.title}
          </SideNavLink>
        )
      );
    }
    return (
      <Location>
        {({ location }) => (
          <SideNavMenu
            isActive={location.pathname.includes(category)}
            defaultExpanded={location.pathname.includes(category)}
            title={category[0].toUpperCase() + category.slice(1)}
          >
            {this.renderSubNavItems(items, location, category)}
          </SideNavMenu>
        )}
      </Location>
    );
  }
}
