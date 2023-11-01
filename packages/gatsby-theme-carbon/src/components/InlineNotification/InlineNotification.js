import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  ErrorFilled,
  CheckmarkFilled,
  WarningFilled,
  InformationFilled,
} from '@carbon/react/icons';
import { Row, Column } from '../Grid';
import useMetadata from '../../util/hooks/useMetadata';

import * as styles from './InlineNotification.module.scss';

const iconTypes = {
  error: ErrorFilled,
  success: CheckmarkFilled,
  warning: WarningFilled,
  info: InformationFilled,
};

const InlineNotification = ({ children, className, kind = 'info' }) => {
  const { interiorTheme } = useMetadata();
  const containerClassName = cx(className, {
    [`cds--inline-notification`]: true,
    [`cds--inline-notification--low-contrast`]: true,
    [`cds--inline-notification--${kind}`]: kind,
    [`cds--inline-notification--hide-close-button`]: true,
    [styles.darkMode]: interiorTheme === 'dark',
  });
  const IconForKind = iconTypes[kind];
  if (!IconForKind) {
    return null;
  }

  return (
    <Row>
      <Column
        colLg={8}
        colMd={6}
        className={cx(styles.notification, className)}>
        <div className={containerClassName}>
          <div className="cds--inline-notification__details">
            {IconForKind ? (
              <IconForKind className="cds--inline-notification__icon">
                <title>{`${kind} icon`}</title>
              </IconForKind>
            ) : null}
            <div className="cds--inline-notification__text-wrapper">
              <div className="cds--inline-notification__content">
                {children}
              </div>
            </div>
          </div>
        </div>
      </Column>
    </Row>
  );
};

InlineNotification.propTypes = {
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default InlineNotification;
