import React from 'react';
import responsiveStyles from '../shared/responsiveStyles';

const h5Css = ({ typeStyles, spacing }) => [
  typeStyles.heading01,
  responsiveStyles,
  {
    marginTop: spacing[4],
    lineHeight: 1.5,
  },
];

const H5 = ({ children, ...rest }) => (
  <h5 css={h5Css} {...rest}>
    {children}
  </h5>
);

export default H5;
