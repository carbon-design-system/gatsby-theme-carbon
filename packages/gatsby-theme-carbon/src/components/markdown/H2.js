import React from 'react';
import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';
import AutolinkHeader from '../AutolinkHeader';

const h2Css = ({ typeStyles, spacing }) => [
  typeStyles.expressiveHeading04,
  responsiveStyles,
  {
    marginBottom: spacing[4],
  },
];

const H2 = ({ children, ...rest }) => (
  <AutolinkHeader is="h2" css={h2Css} {...rest}>
    {children}
  </AutolinkHeader>
);

export default H2;
