import React from 'react';
import { Row, Column } from '../Grid';
import * as styles from './last-modified-date.module.scss';

const LastModifiedDate = ({ date }) => {
  const options = {
    day: '2-digit',
    year: 'numeric',
    month: 'long',
  };

  const lastModified = new Date(date);

  return date ? (
    <Row className={styles.row}>
      <Column>
        <div className={styles.text}>
          Page last updated: {lastModified.toLocaleDateString('en-GB', options)}
          {/* // https://www-03preprod.ibm.com/support/knowledgecenter/ibm_style/dates-and-times.html */}
        </div>
      </Column>
    </Row>
  ) : null;
};
export default LastModifiedDate;
