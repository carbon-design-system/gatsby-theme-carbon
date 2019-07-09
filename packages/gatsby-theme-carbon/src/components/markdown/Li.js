import React from 'react';

const Li = ({ children, ...rest }) => (
  <li className="bx--list__item" {...rest}>
    {children}
  </li>
);

export default Li;
