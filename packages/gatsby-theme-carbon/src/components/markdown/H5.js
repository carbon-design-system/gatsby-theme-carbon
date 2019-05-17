import React from 'react';
import { header } from './headers.module.scss';

const H5 = ({ children, ...rest }) => (
  <h5 className={header} {...rest}>
    {children}
  </h5>
);

export default H5;
