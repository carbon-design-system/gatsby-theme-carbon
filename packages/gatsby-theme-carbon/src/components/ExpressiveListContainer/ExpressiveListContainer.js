import React from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';
import { Row, Column } from '../Grid';
import * as styles from './ExpressiveListContainer.module.scss';

const ExpressiveListContainer = ({
  contentClassName,
  children,
  className,
  text,
  title,
  titleType,
}) => {
  const ExpressiveContainerClassNames = cx(className, styles.container);

  const TitleClassNames = cx(styles.title, {
    [styles.expressive_04]: titleType === 'expressive-04',
    [styles.expressive_02]: titleType === 'expressive-02',
  });

  const ContentClassNames = cx(contentClassName, styles.content);

  return (
    <Row className={ExpressiveContainerClassNames}>
      <Column colMd={2} colLg={4} noGutterLgLeft>
        <h3 className={TitleClassNames}>{title}</h3>
      </Column>
      <Column colMd={6} colLg={8} noGutterLgRight className={ContentClassNames}>
        <p className={styles.text}>{text}</p>
        {children}
      </Column>
    </Row>
  );
};

ExpressiveListContainer.propTypes = {
  contentClassName: propTypes.string,
  children: propTypes.node,
  className: propTypes.string,
  title: propTypes.string,
  titleType: propTypes.string,
};

export default ExpressiveListContainer;
