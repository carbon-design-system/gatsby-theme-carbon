import React from 'react';
import cx from 'classnames';
import { AccordionItem } from 'carbon-components-react';
import { accordionItems } from './Accordion.module.scss';

const Accordion = ({ className, children, ...rest }) => (
  <AccordionItem {...rest} className={cx(className, accordionItems)}>
    {children}
  </AccordionItem>
);

export default Accordion;
