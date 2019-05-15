import React from 'react';
import responsiveStyles from '../shared/responsiveStyles';

const h5Css = ({ typeStyles, spacing }) => [
  typeStyles.heading01,
  responsiveStyles,
  {
    marginBottom: 0,
  },
];

const H6 = ({ children, ...rest }) => (
  <h6 css={h5Css} {...rest}>
    {children}
  </h6>
);

export default H6;
