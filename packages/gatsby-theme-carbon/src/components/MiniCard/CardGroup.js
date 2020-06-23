import React from 'react';
import cx from 'classnames';
import { Row, Column } from '../Grid';

const CardGroup = ({ children, className, ...rest }) => (
  <Row className={cx(className)}>
    {React.Children.map(children, (child) => (
      <Column colMd={4} colLg={4} noGutterSm cardGroup {...rest}>
        {child}
      </Column>
    ))}
  </Row>
);

export default CardGroup;
