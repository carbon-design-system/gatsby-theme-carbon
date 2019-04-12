import React from 'react';
import Row from '../Row';

const h4Css = ({ typeStyles, layout }) => ({
  ...typeStyles.heading02,
  marginTop: layout[0],
  marginBottom: `calc(0.5 * ${layout[0]})`,
});

const H4 = ({ children }) => (
  <Row>
    <h4 css={h4Css} className="markdown-h4">
      {children}
    </h4>
  </Row>
);

export default H4;
