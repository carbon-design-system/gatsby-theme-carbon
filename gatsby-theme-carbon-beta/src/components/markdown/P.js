import React from 'react';

import Row from './Row';

const pCss = ({ typeStyles, layout }) => ({
  ...typeStyles.bodyLong02,
  marginBottom: layout[2],
  '& :empty': {
    padding: 0,
    margin: 0,
  },
});

const P = ({ children }) => (
  <Row type="p">
    <p className="markdown-p" css={pCss}>
      {children}
    </p>
  </Row>
);

export default P;
