import React from 'react';
import { Link as CarbonLink } from 'carbon-components-react';
import cx from 'classnames';
import { link } from './Link.module.scss';

const Link = ({ className, ...rest }) => (
  <CarbonLink {...rest} className={cx(className, link)} />
);

export default Link;
