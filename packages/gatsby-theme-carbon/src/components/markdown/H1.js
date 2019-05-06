import React from 'react';
import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';

const h1Css = ({ typeStyles, layout }) => [
  typeStyles.expressiveHeading05,
  responsiveStyles,
  {
    marginTop: layout[3],
    marginBottom: layout[2],
    [mq.md]: {
      marginTop: '5rem',
    },
  },
];

const H1 = ({ children }) => (
  <h1 css={h1Css} className="carbon--mdx__h1">
    {children}
  </h1>
);

export default H1;
