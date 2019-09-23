/* eslint-disable react/no-danger */
import React from 'react';
import wrapRoot from './src/util/wrap-root-element';
import { version } from './package.json';

export const wrapRootElement = wrapRoot;

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
    <meta key="gtc-version" name="gtc-version" content={version} />,
  ]);
};
