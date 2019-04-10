import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as EmotionProvider } from 'emotion-theming';
import theme from './theme';

const ThemeProvider = ({ children }) => (
  <EmotionProvider theme={theme}>{children}</EmotionProvider>
);

export default ThemeProvider;
