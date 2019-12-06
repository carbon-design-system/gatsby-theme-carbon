import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import { NavContextProvider } from './context/NavContext';

const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </NavContextProvider>
);

export default wrapRootElement;
