import React from 'react';
import responsiveStyles from '../shared/responsiveStyles';

const h5Css = ({ typeStyles, spacing }) => [
  typeStyles.heading01,
  responsiveStyles,
  {
    marginBottom: 0,
  },
];

const H5 = ({ children, ...rest }) => (
  <h5 css={h5Css} {...rest}>
    {children}
  </h5>
);

export default H5;
