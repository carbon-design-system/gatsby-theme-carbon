import React from 'react';
import { header } from './headers.module.scss';

const H4 = ({ children, ...rest }) => (
  <h4 className={header} {...rest}>
    {children}
  </h4>
);

export default H4;
