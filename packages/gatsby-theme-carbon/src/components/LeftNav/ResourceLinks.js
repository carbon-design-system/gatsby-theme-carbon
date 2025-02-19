import React, { useContext, useEffect } from 'react';
import { SideNavLink } from '@carbon/react';
import { Link } from 'gatsby';
import { Launch as LaunchIcon } from '@carbon/react/icons';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { breakpoints } from '@carbon/elements';

import { outboundLink, divider, dividerSpace } from './LeftNav.module.scss';
import NavContext from '../../util/context/NavContext';

const LeftNavResourceLinks = ({
  links,
  shouldOpenNewTabs,
  includeDividerSpace = true,
}) => {
  const { toggleNavState, leftNavIsOpen } = useContext(NavContext);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLgWindow = window.matchMedia(
        `(min-width: ${breakpoints.lg.width})`
      ).matches;

      if (isLgWindow) {
        toggleNavState('leftNavIsOpen', 'open');
      } else {
        toggleNavState('leftNavIsOpen', 'close');
      }
    }
  }, []);

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
            tabIndex={!leftNavIsOpen ? -1 : 0}
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
