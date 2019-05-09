import React from 'react';
import { settings } from 'carbon-components';
import GHSlugger from 'github-slugger';

const slugger = new GHSlugger();

const { prefix } = settings;

const AnchorLink = ({ to, children }) => {
  const href = to || `#${slugger.slug(children)}`;
  return (
    <a className={`${prefix}--anchor-links__link`} href={href}>
      {children}
    </a>
  );
};

export default AnchorLink;
