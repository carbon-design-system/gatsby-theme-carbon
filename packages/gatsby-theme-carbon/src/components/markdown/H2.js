import React from 'react';

import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';

const h2Css = ({ typeStyles, layout }) => [
  typeStyles.expressiveHeading04,
  responsiveStyles,
  {
    marginTop: layout[2],
    marginBottom: layout[0],
    [mq.md]: {
      marginTop: layout[3],
    },
  },
];

const H2 = ({ children }) => (
  <h2 css={h2Css} className="carbon--mdx__h2">
    {children}
  </h2>
);

export default H2;
