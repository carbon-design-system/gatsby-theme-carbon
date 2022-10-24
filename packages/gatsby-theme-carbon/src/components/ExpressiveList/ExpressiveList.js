import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { Row, Column } from '../Grid';
import * as styles from './ExpressiveList.module.scss';

const ExpressiveList = ({
  children,
  className,
  pictogram,
  title,
  titleType,
}) => {
  const ExpressiveListTitleClassNames = cx(styles.title, {
    [styles.expressive_04]: titleType === 'expressive-04',
    [styles.expressive_02]: titleType === 'expressive-02',
  });

  if (!pictogram) {
    return (
      <Row className={(cx(className), styles.listRow)}>
        <Column colMd={2} colLg={4} noGutterLgLeft>
          <h3 className={ExpressiveListTitleClassNames}>{title}</h3>
        </Column>
        <Column colMd={6} colLg={8}>
          <p className={styles.content}>{children}</p>
        </Column>
      </Row>
    );
  }
  return (
    <Row className={(cx(className), styles.listRow)}>
      <Column colMd={2} colLg={1} noGutterLgLeft>
        {pictogram}
      </Column>
      <Column colMd={6} colLg={7} className={styles.pictogramContent}>
        <h3 className={ExpressiveListTitleClassNames}>{title}</h3>
        <p className={styles.content}>{children}</p>
      </Column>
    </Row>
  );
};

ExpressiveList.propTypes = {
  children: propTypes.string,
  className: propTypes.string,
  pictogram: propTypes.node,
  title: propTypes.string,
  titleType: propTypes.string,
};

export default ExpressiveList;
