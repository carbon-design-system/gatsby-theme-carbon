import React from 'react';
import AutolinkHeader from '../AutolinkHeader';
import { header } from './headers.module.scss';

const H1 = ({ children, ...rest }) => (
  <AutolinkHeader is="h1" className={header} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H1;
