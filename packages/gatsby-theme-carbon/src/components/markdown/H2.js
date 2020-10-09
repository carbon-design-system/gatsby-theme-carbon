import React from 'react';
import cx from 'classnames';
import AutolinkHeader from '../AutolinkHeader';

import { h2 } from './Markdown.module.scss';

const H2 = ({ children, className, ...rest }) => (
  <AutolinkHeader className={cx(className, h2)} is="h2" {...rest}>
    {children}
  </AutolinkHeader>
);

export default H2;
