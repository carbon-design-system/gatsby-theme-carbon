import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/dist/**', '**/node_modules/**', '**/.cache/**'] },
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: '18',
      },
    },
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
