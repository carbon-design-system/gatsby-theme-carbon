import React from 'react';
import cx from 'classnames';
import AutolinkHeader from '../AutolinkHeader';

import { h3 } from './Markdown.module.scss';

const H3 = ({ children, className, ...rest }) => (
  <AutolinkHeader is="h3" className={cx(className, h3)} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H3;
