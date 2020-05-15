import React from 'react';
import cx from 'classnames';

import {
  leftNavWrapper,
  hasHeaderNavStyles,
  expanded as expandedStyles,
} from './LeftNavWrapper.module.scss';

const LeftNavWrapper = ({ hasHeaderNavigation, expanded, ...rest }) => {
  const className = cx(leftNavWrapper, {
    [hasHeaderNavStyles]: hasHeaderNavigation,
    [expandedStyles]: expanded,
  });
  return <div className={className} {...rest} />;
};

export default LeftNavWrapper;
