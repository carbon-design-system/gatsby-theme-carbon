import React from 'react';
import Row from '../Row';

const h5Css = ({ typeStyles, layout }) => ({
  ...typeStyles.heading01,
  marginTop: layout[0],
  marginBottom: `calc(0.5 * ${layout[0]})`,
});

const H5 = ({ children }) => (
  <Row>
    <h5 css={h5Css} className="markdown-h5">
      {children}
    </h5>
  </Row>
);

export default H5;
