import React from 'react';

import { blockquote } from './Markdown.module.scss';

const Blockquote = props => <blockquote className={blockquote} {...props} />;

export default Blockquote;
