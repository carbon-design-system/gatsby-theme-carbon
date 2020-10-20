import React from 'react';
import cx from 'classnames';
import { aside } from './Aside.module.scss';

export default class Aside extends React.Component {
  render() {
    const { children, className, ...rest } = this.props;

    return (
      <aside className={cx(aside, className)} {...rest}>
        {children}
      </aside>
    );
  }
}
