import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
import defaultComponents from './defaultComponents';

const MDXProvider = ({ components = defaultComponents, ...rest }) => (
  <Provider components={components} {...rest} />
);

export default MDXProvider;
