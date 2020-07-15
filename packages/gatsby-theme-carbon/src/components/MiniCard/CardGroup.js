import React from 'react';
import cx from 'classnames';
import { Row } from '../Grid';
import styles from './CardGroup.module.scss';

const CardGroup = ({ children, className, ...rest }) => (
  <Row className={cx(className, styles.cardGroup)} {...rest}>
    {children}
  </Row>
);

export default CardGroup;
