import React from 'react';
import { h4 } from './Markdown.module.scss';

const H4 = ({ children, ...rest }) => (
  <h4 className={h4} {...rest}>
    {children}
  </h4>
);

export default H4;
