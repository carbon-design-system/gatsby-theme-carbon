import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { InlineNotification as CarbonInlineNotification } from 'carbon-components-react';
import { Row, Column } from '../Grid';
import useMetadata from '../../util/hooks/useMetadata';

import * as styles from './InlineNotification.module.scss';

const InlineNotification = ({ children, className, kind = 'info' }) => {
  const { interiorTheme } = useMetadata();

  return (
    <Row>
      <Column
        colLg={8}
        colMd={6}
        className={cx(styles.notification, className)}>
        <CarbonInlineNotification
          lowContrast
          hideCloseButton
          kind={kind}
          title=""
          subtitle={children}
          className={interiorTheme === 'dark' && styles.darkMode}
        />
      </Column>
    </Row>
  );
};

InlineNotification.propTypes = {
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default InlineNotification;
