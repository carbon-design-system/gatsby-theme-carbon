import React from 'react';
import cx from 'classnames';
import { blockquote } from './Markdown.module.scss';

const Blockquote = ({ className, ...rest }) => (
  <blockquote className={cx(className, blockquote)} {...rest} />
);

export default Blockquote;
