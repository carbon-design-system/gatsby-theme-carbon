import React from 'react';
import responsiveStyles from '../shared/responsiveStyles';

const pCss = ({ typeStyles, layout }) => [
  typeStyles.bodyLong02,
  responsiveStyles,
  {
    marginBottom: layout[1],
    '& :empty': {
      padding: 0,
      margin: 0,
    },
  },
];

const P = ({ children }) => (
  <p css={pCss} className="carbon--mdx__p">
    {children}
  </p>
);

export default P;
