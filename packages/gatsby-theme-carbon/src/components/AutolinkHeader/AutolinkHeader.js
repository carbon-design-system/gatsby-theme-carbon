import React from 'react';
import GHSlugger from 'github-slugger';
import Link from '@carbon/icons-react/lib/link/20';
import cx from 'classnames';

import { header, anchor } from './AutolinkHeader.module.scss';

const slugger = new GHSlugger();

const Anchor = ({ id, string }) => (
  <a className={anchor} href={`#${id}`} aria-label={`${string} permalink`}>
    <Link />
  </a>
);

const AutolinkHeader = ({ is: Component, ...props }) => {
  const string = React.Children.map(
    props.children,
    child => (child.props ? child.props.children : child) // handle bold/italic words
  ).join('');

  const id = slugger.slug(string);

  const className = cx(header, props.className);

  return (
    <Component {...props} id={id} className={className}>
      <Anchor id={id} string={string} />
      {props.children}
    </Component>
  );
};

AutolinkHeader.defaultProps = { is: 'h2' };

export default AutolinkHeader;
