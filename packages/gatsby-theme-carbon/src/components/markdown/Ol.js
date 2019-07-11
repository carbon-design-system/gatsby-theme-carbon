import React from 'react';

const Ol = ({ children, ...rest }) => (
  <ol className="bx--list--ordered" {...rest}>
    {children}
  </ol>
);

export default Ol;
