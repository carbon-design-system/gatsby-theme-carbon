import React from 'react';
import GHSlugger from 'github-slugger';
import { link } from './AnchorLinks.module.scss';

const slugger = new GHSlugger();

const AnchorLink = ({ to, children }) => {
  const href = to || `#${slugger.slug(children)}`;
  return (
    <a className={link} href={href}>
      {children}
    </a>
  );
};

export default AnchorLink;
