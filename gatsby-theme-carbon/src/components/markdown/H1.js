import React from 'react';
import Row from '../Row';
import mq from '../../util/media-queries';

const h1Css = ({ typeStyles, layout }) => ({
  ...typeStyles.expressiveHeading05,
  marginTop: layout[3],
  marginBottom: layout[2],
  [mq.md]: {
    marginTop: '5rem',
  },
});

const H1 = ({ children }) => (
  <Row>
    <h1 css={h1Css} className="markdown-h1">
      {children}
    </h1>
  </Row>
);

export default H1;
