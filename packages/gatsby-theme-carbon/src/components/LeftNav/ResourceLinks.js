import React from 'react';
import { SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'gatsby';
import LaunchIcon from '@carbon/icons-react/es/launch/16';

const LeftNavResourceLinks = ({ links }) =>
  links ? (
    <>
      <hr className="bx--side-nav__divider" />
      {links.map((link, i) => {
        const additionalProps = !link.href.includes('http') ? ({
          element: Link,
          href: link.href
        }) : ({
          element: 'a',
          target: '_blank',
          rel: 'noopener noreferral',
          href: link.href
        })
        return (
          <SideNavLink
            key={i}
            style={{ marginTop: i === 0 ? '1rem' : 0 }}
            icon={<LaunchIcon />}
            className="bx--side-nav--website-link"
            {...additionalProps}
          >
            {link.title}
          </SideNavLink>
      )})}
    </>
  ) : null;

export default LeftNavResourceLinks;
