import React from 'react';
import useMedia from 'use-media';
import { breakpoints } from '@carbon/elements';
import { Link } from '@carbon/react/icons';
import cx from 'classnames';
import slugify from 'slugify';

import {
  header,
  anchor,
  leftAnchor,
  rightAnchor,
} from './AutolinkHeader.module.scss';

const Anchor = ({ id, string, position }) => {
  const anchorClasses = cx(anchor, {
    [leftAnchor]: position === 'left',
    [rightAnchor]: position === 'right',
  });

  return (
    <a
      className={anchorClasses}
      href={`#${id}`}
      aria-label={`${string} permalink`}>
      <Link size={20} />
    </a>
  );
};

const defaults = {
  is: 'h2',
};

const AutolinkHeader = ({
  is: Component = defaults.is,
  className,
  ...props
}) => {
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });

  const string = React.Children.map(
    props.children,
    (child) => (child.props ? child.props.children : child) // handle bold/italic words
  ).join('');

  const id = `${slugify(string, { lower: true })}`;

  const anchorPosition = () => (isMobile ? 'right' : 'left');

  return (
    <Component className={cx(header, className)} {...props} id={id}>
      {props.children}
      <Anchor id={id} string={string} position={anchorPosition()} />
    </Component>
  );
};

export default AutolinkHeader;
