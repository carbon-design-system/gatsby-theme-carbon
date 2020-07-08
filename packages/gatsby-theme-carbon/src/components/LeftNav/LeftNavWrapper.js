import React from 'react';
import cx from 'classnames';

import {
  leftNavWrapper,
  useHeaderNavStyles,
  expanded as expandedStyles,
} from './LeftNavWrapper.module.scss';

import useMetadata from '../../util/hooks/useMetadata';

const LeftNavWrapper = ({ expanded, ...rest }) => {
  const { navigationStyle } = useMetadata();
  const className = cx(leftNavWrapper, {
    [useHeaderNavStyles]: navigationStyle,
    [expandedStyles]: expanded,
  });
  return <div className={className} {...rest} />;
};

export default LeftNavWrapper;
