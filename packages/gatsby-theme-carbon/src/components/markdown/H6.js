import React from 'react';
import responsiveStyles from '../shared/responsiveStyles';

const h5Css = ({ typeStyles, layout }) => [
  typeStyles.heading01,
  responsiveStyles,
  {
    marginTop: layout[0],
    marginBottom: `calc(0.5 * ${layout[0]})`,
  },
];

const H6 = ({ children, ...rest }) => (
  <h6 css={h5Css} {...rest}>
    {children}
  </h6>
);

export default H6;
