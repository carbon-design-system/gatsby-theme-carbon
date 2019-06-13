import React from 'react';

import { ordered } from './Markdown.module.scss';

const Ol = ({ children, ...rest }) => (
  <ol className={ordered} {...rest}>
    {children}
  </ol>
);

export default Ol;
