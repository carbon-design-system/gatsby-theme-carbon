import React from 'react';
import cx from 'classnames';
import { AccordionItem as CarbonAccordionItem } from 'carbon-components-react';

const AccordionItem = ({ className, children, ...rest }) => (
  <CarbonAccordionItem {...rest} className={cx(className)}>
    {children}
  </CarbonAccordionItem>
);

export default AccordionItem;
