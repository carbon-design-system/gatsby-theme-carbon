import React from 'react';
import propTypes from 'prop-types';
import { Row, Column } from '../Grid';
import * as styles from './ExpressiveContentList.module.scss';

const ExpressiveContentList = ({ title, children }) => (
  <Row className={styles.listRow}>
    <Column colLg={4} noGutterLgLeft>
      <h3 className={styles.title}>{title}</h3>
    </Column>
    <Column colLg={8}>
      <p className={styles.content}>{children}</p>
    </Column>
  </Row>
);

ExpressiveContentList.propTypes = {
  title: propTypes.string,
  children: propTypes.string,
};

export default ExpressiveContentList;
