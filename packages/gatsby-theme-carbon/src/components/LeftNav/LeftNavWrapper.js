import React from 'react';
import cx from 'classnames';

import {
  leftNavWrapper,
  expanded as expandedStyles,
} from './LeftNavWrapper.module.scss';

const LeftNavWrapper = ({ expanded, ...rest }) => {
  const className = cx(leftNavWrapper, {
    [expandedStyles]: expanded,
  });
  return <div className={className} {...rest} />;
};

export default LeftNavWrapper;
