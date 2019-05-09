import React from 'react';
import ThemeProvider from './src/components/ThemeProvider';
import { NavContextProvider } from './src/util/context/NavContext';

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </NavContextProvider>
);

const getTargetOffset = hash => {
  const id = window.decodeURI(hash.replace(`#`, ``));
  if (id !== ``) {
    const element = document.getElementById(id);
    if (element) {
      return element.offsetTop;
    }
  }
  return null;
};

export const onInitialClientRender = () => {
  requestAnimationFrame(() => {
    const offset = getTargetOffset(window.location.hash);
    if (offset !== null) {
      window.scrollTo(0, offset);
    }
  });
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const offset = getTargetOffset(location.hash);
  return offset !== null ? [0, offset] : true;
};
