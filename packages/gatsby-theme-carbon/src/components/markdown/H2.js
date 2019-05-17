import React from 'react';
import AutolinkHeader from '../AutolinkHeader';

import { header } from './headers.module.scss';

const H2 = ({ children, ...rest }) => (
  <AutolinkHeader is="h2" className={header} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H2;
