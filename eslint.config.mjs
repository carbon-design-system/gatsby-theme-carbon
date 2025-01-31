import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('wesbos'),
  {
    rules: {
      'react/prop-types': 0,
      'react/destructuring-assignment': 0,
      'react/no-access-state-in-setstate': 0,
      'react/jsx-props-no-spreading': 0,
      'react/jsx-no-useless-fragment': 1,
      'no-useless-escape': 0,
    },
  },
];
