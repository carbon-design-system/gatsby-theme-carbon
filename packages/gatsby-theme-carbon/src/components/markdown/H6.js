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

const H6 = ({ children, ...rest }) => (
  <h6 css={h5Css} {...rest}>
    {children}
  </h6>
);

export default H6;
