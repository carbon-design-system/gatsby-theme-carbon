import React from 'react';
import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';
import AutolinkHeader from '../AutolinkHeader';

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

const H3 = ({ children, ...rest }) => (
  <AutolinkHeader is="h3" css={h3Css} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H3;
