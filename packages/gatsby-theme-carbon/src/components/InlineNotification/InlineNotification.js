import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { InlineNotification as CarbonInlineNotification } from 'carbon-components-react';
import { Row, Column } from '../Grid';
import useMetadata from '../../util/hooks/useMetadata';

import styles from './InlineNotification.module.scss';

const InlineNotification = ({ children, className, kind = 'info' }) => {
  const notificationClasses = cx(styles.notification, {
    [className]: className,
  });

  const { interiorTheme } = useMetadata();

  return (
    <Row>
      <Column colLg={8} colMd={6} className={notificationClasses}>
        <CarbonInlineNotification
          lowContrast
          hideCloseButton
          kind={kind}
          title=""
          subtitle={children}
          className={cx({ [styles.darkMode]: interiorTheme === 'dark' })}
        />
      </Column>
    </Row>
  );
};

InlineNotification.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default InlineNotification;
