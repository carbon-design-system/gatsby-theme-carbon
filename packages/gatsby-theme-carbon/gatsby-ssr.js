import React from 'react';
import wrapRoot from './src/util/wrap-root-element';
import { version } from './package.json';

export const wrapRootElement = wrapRoot;

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  // prevents jank while page hydrates, removed on page load
  setBodyAttributes({
    className: 'body--preload',
  });

  const script = `
    document.addEventListener("DOMContentLoaded", function(event) {
      var hash = window.decodeURI(location.hash.replace('#', ''))
      if (hash !== '') {
        var element = document.getElementById(hash)
        if (element) {
          var offset = element.offsetTop - 24;
          // Wait for the browser to finish rendering before scrolling.
          setTimeout((function() {
            window.scrollTo(0, offset)
          }), 0)
        }
      }
    })
  `;

  return setHeadComponents([
    <link
      key="sans"
      rel="preload"
      href="https://1.www.s81c.com/common/carbon/plex/fonts/IBM-Plex-Sans-Variable/fonts/complete/woff2/IBM%20Plex%20Sans%20Var-Roman.woff2"
      as="font"
      type="font/woff2"
      crossOrigin=""
    />,
    <script
      key="scroll-loader-script"
      dangerouslySetInnerHTML={{ __html: script }}
    />,
    <meta key="gtc-version" name="gtc-version" content={version} />,
  ]);
};
