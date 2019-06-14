import React from 'react';
import { h6 } from './Markdown.module.scss';

const H6 = ({ children, ...rest }) => (
  <h6 className={h6} {...rest}>
    {children}
  </h6>
);

export default H6;
