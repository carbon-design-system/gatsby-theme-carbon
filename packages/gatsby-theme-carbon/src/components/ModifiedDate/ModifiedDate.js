import React from 'react';
import { Row, Column } from '../Grid';
import styles from './modified-date.module.scss';
import useMetadata from '../../util/hooks/useMetadata';

const ModifiedDate = (gitDate) => {
  const { pageModifiedDate } = useMetadata();

  const chonkyDate = gitDate.gitDate.gitDate;

  const date = chonkyDate.split('T')[0];

  return pageModifiedDate ? (
    <Row className={styles.row}>
      <Column>
        <div className={styles.text}>Page last updated: {date}</div>
      </Column>
    </Row>
  ) : null;
};

export default ModifiedDate;
