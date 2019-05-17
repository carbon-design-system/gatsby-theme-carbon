import React from 'react';
import { header } from './headers.module.scss';

const H6 = ({ children, ...rest }) => (
  <h6 className={header} {...rest}>
    {children}
  </h6>
);

export default H6;
