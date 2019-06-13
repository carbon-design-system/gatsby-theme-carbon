import React from 'react';
import AutolinkHeader from '../AutolinkHeader';

import { h3 } from './Markdown.module.scss';

const H3 = ({ children, ...rest }) => (
  <AutolinkHeader is="h3" className={h3} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H3;
