import React from 'react';
import ThemeProvider from './src/components/ThemeProvider';
import { NavContextProvider } from './src/util/context/NavContext';

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </NavContextProvider>
);
