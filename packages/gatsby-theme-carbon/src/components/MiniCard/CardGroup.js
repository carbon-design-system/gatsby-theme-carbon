import React from 'react';
import { Row, Column } from '../Grid';
import { cardGroup } from './CardGroup.module.scss';

const CardGroup = ({ children, className, ...rest }) => (
  <Row className={className}>
    {React.Children.map(children, (child) => (
      <Column className={cardGroup} colMd={4} colLg={4} noGutterSm {...rest}>
        {child}
      </Column>
    ))}
  </Row>
);

export default CardGroup;
