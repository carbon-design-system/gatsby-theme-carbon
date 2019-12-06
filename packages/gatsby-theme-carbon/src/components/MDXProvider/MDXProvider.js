import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
import defaultComponents from './defaultComponents';

const MDXProvider = ({ components = defaultComponents, children }) => (
  <Provider components={components}>{children}</Provider>
);

export default MDXProvider;
