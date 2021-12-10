import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { Row, Column } from '../Grid';
import * as styles from './ExpressiveList.module.scss';

const ExpressiveList = ({
  background = false,
  children,
  className,
  title,
  titleType,
}) => {
  const ExpressiveListTitleClassNames = cx(styles.title, {
    [styles.expressive_03]: titleType === 'expressive-03',
    [styles.expressive_02]: titleType === 'expressive-02',
  });

  const ExpressiveListBackgroundClassNames = cx(className, styles.listRow, {
    [styles.background]: background,
  });

  return (
    <Row className={ExpressiveListBackgroundClassNames}>
      <Column colLg={4} noGutterLgLeft>
        <h3 className={ExpressiveListTitleClassNames}>{title}</h3>
      </Column>
      <Column colLg={8}>
        <p className={styles.content}>{children}</p>
      </Column>
    </Row>
  );
};

ExpressiveList.propTypes = {
  background: propTypes.bool,
  children: propTypes.string,
  className: propTypes.string,
  title: propTypes.string,
  titleType: propTypes.string,
};

export default ExpressiveList;

// TODO
// - pictogram
