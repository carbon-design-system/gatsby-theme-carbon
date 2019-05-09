import React from 'react';
import ThemeProvider from './src/components/ThemeProvider';
import { NavContextProvider } from './src/util/context/NavContext';
import { useSmoothScroll } from './src/util/hooks';

const SmoothLoader = ({ children }) => {
  useSmoothScroll();
  return children;
};

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider>
      <SmoothLoader>{element}</SmoothLoader>
    </ThemeProvider>
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
