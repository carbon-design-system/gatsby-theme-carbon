import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import pluginJs from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import html from 'eslint-plugin-html';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/dist/**',
      '**/public/**',
      '**/node_modules/**',
      '**/.cache/**',
      'prettier.config.js',
      'commitlint.config.js',
      'packages/example/gatsby-config.js',
    ],
  },
  {
    plugins: {
      reactHooks: fixupPluginRules(pluginReactHooks),
    },
  },
  {
    files: ['**/*.html'],
    plugins: { html },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
  },
  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,

  {
    settings: {
      react: {
        version: '18',
      },
    },
    rules: {
      'react/prop-types': 0,
      // 'react/destructuring-assignment': 0,
      // 'react/no-access-state-in-setstate': 0,
      // 'react/jsx-props-no-spreading': 0,
      'react/jsx-no-useless-fragment': 1,
      'no-useless-escape': 0,
      'prettier/prettier': 'error',
    },
  },
];
