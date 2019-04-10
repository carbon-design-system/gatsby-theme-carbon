import React from 'react';
import Row from './Row';
import mq from '../MediaQueries';

const h2Css = ({ typeStyles, layout }) => ({
  ...typeStyles.expressiveHeading04,
  marginTop: layout[2],
  marginBottom: layout[0],
  [mq.md]: {
    marginTop: layout[3],
  },
});

const H2 = ({ children }) => (
  <Row>
    <h2 css={h2Css} className="markdown-h2">
      {children}
    </h2>
  </Row>
);

export default H2;
