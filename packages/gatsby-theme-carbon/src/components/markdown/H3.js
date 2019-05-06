import React from 'react';

import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';

const h3Css = ({ typeStyles, layout }) => [
  responsiveStyles,
  typeStyles.expressiveHeading03,
  {
    marginTop: layout[1],
    marginBottom: layout[0],
    [mq.sm]: {
      marginTop: layout[2],
    },
  },
];

const H3 = ({ children }) => (
  <h3 css={h3Css} className="carbon--mdx__h3">
    {children}
  </h3>
);

export default H3;
