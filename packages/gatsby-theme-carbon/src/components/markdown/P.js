import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Row, Column } from '../Grid';

import { paragraph } from './Markdown.module.scss';

export default class P extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Specify a custom class
     */
    className: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;

    const paragraphClasses = classnames(paragraph, {
      [className]: className,
    });

    return (
      <Row>
        <Column colLg={8} colMd={6}>
          <p className={paragraphClasses} {...rest}>
            {children}
          </p>
        </Column>
      </Row>
    );
  }
}
