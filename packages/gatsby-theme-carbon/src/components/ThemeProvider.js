import React from 'react';
import { ThemeProvider as EmotionProvider } from 'emotion-theming';
import theme from '../util/theme';

const ThemeProvider = ({ children }) => (
  <EmotionProvider theme={theme}>{children}</EmotionProvider>
);

export default ThemeProvider;
