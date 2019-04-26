import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import slugify from 'slugify';

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

  renderSubNavItems = (items, location, category) => {
    const isActive = item => {
      const titleSlug = slugify(item.title, { lower: true });
      return location.pathname.includes(titleSlug);
    };
    return items.map((item, i) => {
      const active = isActive(item);
      return (
        <SideNavMenuItem
          to={item.path}
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

  shouldRenderSubNav = pages => pages.length > 1;

  render() {
    const { items, category } = this.props;
    if (items.length === 1) {
      return (
        <SideNavLink
          element={Link}
          partiallyActive
          activeClassName="bx--side-nav__link--current"
          to={items[0].path}
        >
          {category}
        </SideNavLink>
      );
    }
    return (
      <Location>
        {({ location }) => (
          <SideNavMenu
            isActive={location.pathname.includes(
              slugify(category, { lower: true })
            )} // TODO similar categories
            defaultExpanded={location.pathname.includes(
              slugify(category, { lower: true })
            )}
            title={category}
          >
            {this.renderSubNavItems(items, location, category)}
          </SideNavMenu>
        )}
      </Location>
    );
  }
}
