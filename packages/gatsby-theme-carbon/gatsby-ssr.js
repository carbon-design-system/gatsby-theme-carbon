/* eslint-disable react/no-danger */
import React from 'react';
import wrapRoot from './src/util/wrap-root-element';
import { version } from './package.json';

export const wrapRootElement = wrapRoot;

export const onRenderBody = ({ setHeadComponents }) =>
  setHeadComponents([
    <meta key="gtc-version" name="gtc-version" content={version} />,
  ]);
