import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
import defaultComponents from './defaultComponents';
import Default from '../Layouts/Default';

const MDXProvider = ({ components = defaultComponents, element }) => (
  <Provider components={{ ...components, wrapper: Default }}>
    {element}
  </Provider>
);

export default MDXProvider;
