import React from 'react';
import slugify from 'slugify';
import cx from 'classnames';
import { link } from './AnchorLinks.module.scss';

const AnchorLink = ({ to, children, className }) => {
  const href = to || `#${slugify(children, { lower: true })}`;
  return (
    <a className={cx(link, className)} href={href}>
      {children}
    </a>
  );
};

export default AnchorLink;
