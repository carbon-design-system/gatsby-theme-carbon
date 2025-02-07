import React from 'react';
import { SideNavLink } from '@carbon/react';
import { Link } from 'gatsby';
import { Launch as LaunchIcon } from '@carbon/react/icons';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { outboundLink, divider, dividerSpace } from './LeftNav.module.scss';

const LeftNavResourceLinks = ({
  links,
  shouldOpenNewTabs,
  includeDividerSpace = true,
}) => {
  if (!links) return null;

  const shouldOpenNewTabsProps = {
    ...(shouldOpenNewTabs && { rel: 'noopener noreferrer', target: '_blank' }),
  };

  return (
    <>
      <hr
        className={cx(divider, {
          [dividerSpace]: includeDividerSpace,
        })}
      />
      {/* eslint-disable-next-line no-unused-vars */}
      {links.map(({ title, href, ...rest }, i) => {
        const outbound = !/^\/(?!\/)/.test(href);
        return (
          <SideNavLink
            key={i}
            renderIcon={outbound ? LaunchIcon : undefined}
            aria-current=""
            to={href}
            href={href}
            className={cx({ [outboundLink]: outbound })}
            element={outbound ? 'a' : Link}
            {...shouldOpenNewTabsProps}>
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
