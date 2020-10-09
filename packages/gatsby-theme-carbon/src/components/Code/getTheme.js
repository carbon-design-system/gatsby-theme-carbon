// @flow
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)

import { white, g10, g100 } from '@carbon/themes';
import {
  teal20,
  blue40,
  cyan40,
  magenta40,
  purple40,
  gray90,
  gray100,
  white0,
} from '@carbon/elements';

const getTheme = (interiorTheme) => {
  let theme = g10; // default

  const isLightTheme = interiorTheme === 'white' || interiorTheme === 'g10';

  if (interiorTheme === 'dark') {
    theme = g100;
  }

  if (interiorTheme === 'white') {
    theme = white;
  }

  theme = {
    ...theme,
    plainBackground: isLightTheme ? gray100 : gray90,
    property: teal20,
    tag: blue40,
    important: cyan40,
    string: magenta40,
    boolean: purple40,
  };

  return {
    plain: {
      backgroundColor: theme.plainBackground,
      color: white0,
    },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: {
          color: theme.text02,
        },
      },
      {
        types: ['namespace'],
        style: {
          opacity: 0.7,
        },
      },
      {
        types: ['tag', 'operator'],
        style: {
          color: theme.tag,
        },
      },
      {
        types: ['property', 'function', 'attr-name'],
        style: {
          color: theme.property,
        },
      },
      {
        types: ['variable'],
        style: {
          color: theme.inverse01, // white
        },
      },
      {
        types: ['string'],
        style: {
          color: theme.string,
        },
      },
      {
        types: ['entity'],
        style: {
          cursor: 'help',
        },
      },
      {
        types: [
          'boolean',
          'entity',
          'url',
          'attr-value',
          'control',
          'directive',
          'unit',
          'statement',
          'regex',
          'at-rule',
          'selector',
          'keyword',
          'placeholder',
        ],
        style: {
          color: theme.boolean,
        },
      },
      {
        types: ['deleted'],
        style: {
          textDecorationLine: 'line-through',
        },
      },
      {
        types: ['inserted'],
        style: {
          borderBottom: '1px dotted #c22dd5',
          textDecorationLine: 'underline',
        },
      },
      {
        types: ['italic'],
        style: {
          fontStyle: 'italic',
        },
      },
      {
        types: ['important', 'bold'],
        style: {
          fontWeight: 'bold',
        },
      },
      {
        types: ['important'],
        style: {
          color: theme.important,
        },
      },
    ],
  };
};

export default getTheme;
