/* eslint-disable react/no-danger */
import React from 'react';
import ThemeProvider from './src/components/ThemeProvider';
import { NavContextProvider } from './src/util/context/NavContext';

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </NavContextProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  const script = `
    document.addEventListener("DOMContentLoaded", function(event) {
      var hash = window.decodeURI(location.hash.replace('#', ''))
      if (hash !== '') {
        var element = document.getElementById(hash)
        if (element) {
          var offset = element.offsetTop
          // Wait for the browser to finish rendering before scrolling.
          setTimeout((function() {
            window.scrollTo(0, offset)
          }), 0)
        }
      }
    })
  `;

  return setHeadComponents([
    <script
      key="scroll-loader-script"
      dangerouslySetInnerHTML={{ __html: script }}
    />,
  ]);
};
