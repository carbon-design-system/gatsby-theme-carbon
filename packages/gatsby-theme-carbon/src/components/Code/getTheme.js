// @flow
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)

import { white, g10, g100 } from '@carbon/themes';

const getTheme = (interiorTheme) => {
  let theme = g10; // default

  if (interiorTheme === 'dark') {
    theme = g100;
  }

  if (interiorTheme === 'white') {
    theme = white;
  }

  const { ui01, text01 } = theme;

  return {
    plain: {
      backgroundColor: ui01,
      color: text01,
    },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: {
          color: text01,
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
          color: text01,
        },
      },
      {
        types: ['property', 'function', 'attr-name'],
        style: {
          color: text01,
        },
      },
      {
        types: ['variable'],
        style: {
          color: text01,
        },
      },
      {
        types: ['string'],
        style: {
          color: text01,
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
          color: text01,
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
          color: text01,
        },
      },
    ],
  };
};

export default getTheme;
