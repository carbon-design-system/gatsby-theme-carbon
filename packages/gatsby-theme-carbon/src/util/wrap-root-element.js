import React from 'react';
import { NavContextProvider } from './context/NavContext';
import MDXProvider from '../components/MDXProvider';

const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <MDXProvider element={element} />
  </NavContextProvider>
);

export default wrapRootElement;
