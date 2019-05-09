import React from 'react';
import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';
import AutolinkHeader from '../AutolinkHeader';

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

const H1 = ({ children, ...rest }) => (
  <AutolinkHeader is="h1" css={h1Css} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H1;
