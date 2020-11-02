import React from 'react';
import cx from 'classnames';
import AutolinkHeader from '../AutolinkHeader';
import { h1 } from './Markdown.module.scss';

const H1 = ({ children, className, ...rest }) => (
  <AutolinkHeader is="h1" className={cx(h1, className)} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H1;
