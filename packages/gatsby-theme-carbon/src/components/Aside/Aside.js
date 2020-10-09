import React from 'react';
import classnames from 'classnames';
import { aside } from './Aside.module.scss';

export default class Aside extends React.Component {
  render() {
    const { children, className, ...rest } = this.props;

    return (
      <aside className={classnames(aside, className)} {...rest}>
        {children}
      </aside>
    );
  }
}
