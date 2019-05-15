import React from 'react';
import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';
import AutolinkHeader from '../AutolinkHeader';

const h3Css = ({ typeStyles, spacing }) => [
  responsiveStyles,
  typeStyles.expressiveHeading03,
  {
    marginBottom: spacing[3],
  },
];

const H3 = ({ children, ...rest }) => (
  <AutolinkHeader is="h3" css={h3Css} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H3;
