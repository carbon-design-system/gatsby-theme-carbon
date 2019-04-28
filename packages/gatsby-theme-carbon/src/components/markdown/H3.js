import React from 'react';
import Row from '../Row';
import mq from '../../util/media-queries';

const h3Css = ({ typeStyles, layout }) => ({
  ...typeStyles.expressiveHeading03,
  marginTop: layout[1],
  marginBottom: layout[0],
  [mq.sm]: {
    marginTop: layout[2],
  },
});

const H3 = ({ children }) => (
  <Row>
    <h3 css={h3Css} className="markdown-h3">
      {children}
    </h3>
  </Row>
);

export default H3;
