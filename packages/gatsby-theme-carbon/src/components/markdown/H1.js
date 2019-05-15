import React from 'react';
import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';
import AutolinkHeader from '../AutolinkHeader';

const h1Css = ({ typeStyles, spacing }) => [
  typeStyles.expressiveHeading05,
  responsiveStyles,
  {
    marginBottom: spacing[4],
  },
];

const H1 = ({ children, ...rest }) => (
  <AutolinkHeader is="h1" css={h1Css} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H1;
