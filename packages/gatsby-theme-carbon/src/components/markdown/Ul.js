import React from 'react';

import { unordered } from './Markdown.module.scss';

const Ul = ({ children, ...rest }) => (
  <ul className={unordered} {...rest}>
    {children}
  </ul>
);

export default Ul;
