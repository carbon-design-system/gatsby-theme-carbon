import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
import defaultComponents from './defaultComponents';

const MDXProvider = ({ components = defaultComponents, element }) => (
  <Provider components={components}>{element}</Provider>
);

export default MDXProvider;
