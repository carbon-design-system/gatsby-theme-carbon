import React from 'react';
import slugify from 'slugify';
import { link } from './AnchorLinks.module.scss';

const AnchorLink = ({ to, children }) => {
  const href = to || `#${slugify(children, { lower: true })}`;
  return (
    <a className={link} href={href}>
      {children}
    </a>
  );
};

export default AnchorLink;
