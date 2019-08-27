import React from 'react';
import { Link20 as Link } from '@carbon/icons-react';
import cx from 'classnames';

import { header, anchor } from './AutolinkHeader.module.scss';

const Anchor = ({ id, string }) => (
  <a className={anchor} href={`#${id}`} aria-label={`${string} permalink`}>
    <Link />
  </a>
);

const AutolinkHeader = ({ is: Component, id, className, ...props }) => {
  const string = React.Children.map(
    props.children,
    child => (child.props ? child.props.children : child) // handle bold/italic words
  ).join('');

  return (
    <Component id={id} className={cx(header, className)} {...props}>
      <Anchor id={id} string={string} />
      {props.children}
    </Component>
  );
};

AutolinkHeader.defaultProps = { is: 'h2' };

export default AutolinkHeader;
