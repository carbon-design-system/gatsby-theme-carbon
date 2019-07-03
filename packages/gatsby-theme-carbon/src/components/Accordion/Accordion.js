import React from 'react';
import cx from 'classnames';
import { Accordion as CarbonAccordion } from 'carbon-components-react';

const Accordion = ({ className, ...rest }) => (
  <CarbonAccordion {...rest} className={cx(className)} />
);
export default Accordion;
