import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import { NavContextProvider } from './context/NavContext';
import MDXProvider from '../components/MDXProvider';

const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider>
      <MDXProvider element={element} />
    </ThemeProvider>
  </NavContextProvider>
);

export default wrapRootElement;
