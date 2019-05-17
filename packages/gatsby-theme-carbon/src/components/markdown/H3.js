import React from 'react';
import AutolinkHeader from '../AutolinkHeader';

import { header } from './headers.module.scss';

const H3 = ({ children, ...rest }) => (
  <AutolinkHeader is="h3" className={header} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H3;
