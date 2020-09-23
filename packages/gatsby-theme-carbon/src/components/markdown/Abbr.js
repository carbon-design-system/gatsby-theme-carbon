import React from 'react';
import { TooltipDefinition } from 'carbon-components-react';
import { abbr } from './Markdown.module.scss';

// TODO add abbreviations remark plugin
const Abbr = ({ title, children }) => (
  <TooltipDefinition className={abbr} tooltipText={title}>
    {children}
  </TooltipDefinition>
);

export default Abbr;
