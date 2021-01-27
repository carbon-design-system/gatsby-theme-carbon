import React from 'react';
import { Row, Column } from '../Grid';
import styles from './modified-date.module.scss';

const ModifiedDate = ({ date }) =>
  //   const { modifiedDate } = date.date.date;

  date ? (
    <Row className={styles.row}>
      <Column>
        <div className={styles.text}>Page last updated: {date} </div>
      </Column>
    </Row>
  ) : null;
export default ModifiedDate;
