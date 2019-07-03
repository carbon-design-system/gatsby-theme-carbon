import React from 'react';
import cx from 'classnames';
import { Accordion as CarbonAccordion } from 'carbon-components-react';
import { accordion } from './Accordion.module.scss';

const Accordion = ({ className, ...rest }) => (
  <CarbonAccordion {...rest} className={cx(className, accordion)} />
);
export default Accordion;
