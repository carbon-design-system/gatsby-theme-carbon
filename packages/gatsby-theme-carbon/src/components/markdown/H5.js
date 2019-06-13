import React from 'react';
import { h5 } from './Markdown.module.scss';

const H5 = ({ children, ...rest }) => (
  <h5 className={h5} {...rest}>
    {children}
  </h5>
);

export default H5;
