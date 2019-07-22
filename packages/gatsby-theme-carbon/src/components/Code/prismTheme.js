// @flow
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)

/* :: import type { PrismTheme } from '../src/types' */
import { ui05 } from '@carbon/elements';

const theme /* : PrismTheme */ = {
  plain: {
    backgroundColor: ui05,
    color: '#fff',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#bebebe',
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
        color: '#6ea6ff',
      },
    },
    {
      types: ['property', 'function', 'attr-name'],
      style: {
        color: '#92eeee',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#ffffff',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#fa75a6',
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
        color: '#bb8eff',
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
        color: '#c94922',
      },
    },
  ],
};

export default theme;
