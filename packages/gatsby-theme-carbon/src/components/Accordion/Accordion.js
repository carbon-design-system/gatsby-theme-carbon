import React from 'react';
import cx from 'classnames';
import { Accordion as CarbonAccordion } from 'carbon-components-react';
import { accordion } from './Accordion.module.scss';
import { Row, Column } from '../Grid';

const Accordion = ({ className, ...rest }) => (
  <Row>
    <Column noGutterSm colLg={8}>
      <CarbonAccordion {...rest} className={cx(className, accordion)} />
    </Column>
  </Row>
);
export default Accordion;
