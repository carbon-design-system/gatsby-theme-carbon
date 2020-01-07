import React from 'react';
import { SideNavLink } from 'carbon-components-react';
import { Link } from 'gatsby';
import { Launch16 as LaunchIcon } from '@carbon/icons-react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { resourceLink, outboundLink } from './LeftNav.module.scss';

const LeftNavResourceLinks = ({ links, shouldOpenNewTabs }) => {
  if (!links) return null;

  const shouldOpenNewTabsProps = {
    ...(shouldOpenNewTabs && { rel: 'noopener noreferrer', target: '_blank' }),
  };

  return (
    <>
      <hr className="bx--side-nav__divider" />
      {links.map(({ title, href, ...rest }, i) => {
        const outbound = !/^\/(?!\/)/.test(href);
        return (
          <SideNavLink
            key={i}
            style={{ marginTop: i === 0 ? '1rem' : 0 }}
            renderIcon={outbound ? LaunchIcon : undefined}
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-current=""
            to={href}
            href={href}
            className={cx(resourceLink, { [outboundLink]: outbound })}
            element={outbound ? 'a' : Link}
            {...shouldOpenNewTabsProps}
          >
            {title}
          </SideNavLink>
        );
      })}
    </>
  );
};

LeftNavResourceLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  // true if outbound links should open in a new tab
  shouldOpenNewTabs: PropTypes.bool,
};

export default LeftNavResourceLinks;
