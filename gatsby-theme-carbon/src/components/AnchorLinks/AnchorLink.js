import React from 'react';
import { settings } from 'carbon-components';
import slugify from 'slugify';

const { prefix } = settings;

const AnchorLink = ({ to, children }) => {
  const href = to || `#${slugify(children, { lower: true })}`;
  return (
    <a className={`${prefix}--anchor-links__link`} href={href}>
      {children}
    </a>
  );
};

export default AnchorLink;
