import React from 'react';
import cx from 'classnames';

import {
  leftNavWrapper,
  useHeaderNavStyles,
  expanded as expandedStyles,
} from './LeftNavWrapper.module.scss';

const LeftNavWrapper = ({ useHeaderNavigation, expanded, ...rest }) => {
  const className = cx(leftNavWrapper, {
    [useHeaderNavStyles]: useHeaderNavigation,
    [expandedStyles]: expanded,
  });
  return <div className={className} {...rest} />;
};

export default LeftNavWrapper;
