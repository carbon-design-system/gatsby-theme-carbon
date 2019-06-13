import React from 'react';
import AutolinkHeader from '../AutolinkHeader';
import { h1 } from './Markdown.module.scss';

const H1 = ({ children, ...rest }) => (
  <AutolinkHeader is="h1" className={h1} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H1;
