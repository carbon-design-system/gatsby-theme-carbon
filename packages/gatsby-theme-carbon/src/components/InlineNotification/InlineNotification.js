import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InlineNotification as CarbonInlineNotification } from 'carbon-components-react';
import { Row, Column } from '../Grid';

import { notification } from './InlineNotification.module.scss';

export default class InlineNotification extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  };

  static defaultProps = {
    kind: 'info',
  };

  render() {
    const { children, className, kind } = this.props;

    const notificationClasses = classnames(notification, {
      [className]: className,
    });

    return (
      <Row>
        <Column colLg={8} colMd={6} className={notificationClasses}>
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
  }
}
