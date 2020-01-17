import React from 'react';
import cx from 'classnames';
import { title } from './Title.module.scss';
import { h4 } from '../markdown/Markdown.module.scss';

const Link = ({ className, ...rest }) => (
  <span {...rest} className={cx(className, h4, title)} />
);

export default Link;
