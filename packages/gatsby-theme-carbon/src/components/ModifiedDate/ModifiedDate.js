import React from 'react';
import { Row, Column } from '../Grid';
import styles from './modified-date.module.scss';

const ModifiedDate = (gitDate) => {
  const chonkyDate = gitDate.gitDate.gitDate;

  const date = chonkyDate.split('T')[0];

  return (
    <Row>
      <Column>
        <div className={styles.text}>Page last updated: {date}</div>
      </Column>
    </Row>
  );
};

export default ModifiedDate;
