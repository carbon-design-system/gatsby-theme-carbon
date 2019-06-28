import React from 'react';
import { AccordionItem as CarbonAccordionItem } from 'carbon-components-react/lib';
import cx from 'classnames';
import './Accordion.scss';

const AccordionItem = ({ className, ...rest }) => (
  <CarbonAccordionItem {...rest} className={cx('accordionItem', className)} />
);

export default AccordionItem;