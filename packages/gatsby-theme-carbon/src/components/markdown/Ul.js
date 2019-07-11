import React from 'react';

const Ul = ({ children, ...rest }) => (
  <ul className="bx--list--unordered" {...rest}>
    {children}
  </ul>
);

export default Ul;
