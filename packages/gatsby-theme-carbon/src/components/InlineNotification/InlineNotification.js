import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { InlineNotification as CarbonInlineNotification } from 'carbon-components-react';
import { Row, Column } from '../Grid';

import { notification } from './InlineNotification.module.scss';

const InlineNotification = ({ children, className, kind }) => (
  <Row>
    <Column colLg={8} colMd={6} className={cx(notification, className)}>
      <CarbonInlineNotification
        lowContrast
        hideCloseButton
        kind={kind}
        title=""
        subtitle={children}
      />
    </Column>
  </Row>
);

InlineNotification.propTypes = {
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

InlineNotification.defaultProps = {
  kind: 'info',
};
