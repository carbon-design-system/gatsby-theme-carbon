import React from 'react';
import { sup } from './Markdown.module.scss';

const Sup = ({ children, ...rest }) => (
  <sup className={sup} {...rest}>
    {children}
  </sup>
);

export default Sup;
