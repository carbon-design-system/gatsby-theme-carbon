import React from 'react';
import cx from 'classnames';

import {
  leftNavWrapper,
  expanded as expandedStyles,
  shouldHideHeader as shouldHideHeaderStyles,
} from './LeftNavWrapper.module.scss';

const LeftNavWrapper = ({ expanded, shouldHideHeader, ...rest }) => {
  const className = cx(leftNavWrapper, {
    [expandedStyles]: expanded,
    [shouldHideHeaderStyles]: shouldHideHeader,
  });
  return <div className={className} {...rest} />;
};

export default LeftNavWrapper;
