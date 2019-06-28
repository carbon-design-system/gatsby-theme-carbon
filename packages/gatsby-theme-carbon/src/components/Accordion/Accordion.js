import React from 'react';
import { Accordion as CarbonAccordion } from 'carbon-components-react/lib';
import cx from 'classnames';

const Accordion = ({ className, ...rest }) => (
  <CarbonAccordion {...rest} className={cx(className)} />
);

export default Accordion;