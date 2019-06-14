import React from 'react';
import AutolinkHeader from '../AutolinkHeader';

import { h2 } from './Markdown.module.scss';

const H2 = ({ children, ...rest }) => (
  <AutolinkHeader className={h2} is="h2" {...rest}>
    {children}
  </AutolinkHeader>
);

export default H2;
