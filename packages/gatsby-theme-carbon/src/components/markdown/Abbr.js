import React from 'react';
import { Tooltip as TooltipDefinition } from '@carbon/react';
import cx from 'classnames';
import { abbr } from './Markdown.module.scss';

// TODO add abbreviations remark plugin
const Abbr = ({ title, children, className }) => (
  <TooltipDefinition className={cx(abbr, className)} tooltipText={title}>
    {children}
  </TooltipDefinition>
);

export default Abbr;
