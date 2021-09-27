import React from 'react';
import { Link } from 'gatsby';
import {
  ArrowRight20,
  Calendar20,
  Download20,
  Email20,
  Launch20,
} from '@carbon/icons-react';
import { settings } from 'carbon-components';
import cx from 'classnames';

import * as styles from './MiniCard.module.scss';
import { Column } from '../Grid';

const { prefix } = settings;

const getIcon = ({ actionIcon }) => {
  switch (actionIcon) {
    case 'arrowRight':
      return <ArrowRight20 aria-label="Open resource" />;
    case 'download':
      return <Download20 aria-label="Download" />;
    case 'email':
      return <Email20 aria-label="Email" />;
    case 'calendar':
      return <Calendar20 aria-label="Calendar" />;
    default:
      return <Launch20 aria-label="Open resource" />;
  }
};

const MiniCard = ({
  children,
  href,
  title,
  actionIcon,
  className,
  linkProps,
  ...rest
}) => {
  const cardContent = (
    <div className={cx(className, styles.card)}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        {children === undefined ? (
          <div className={styles.icon}>{getIcon({ actionIcon })}</div>
        ) : (
          <div className={styles.image}>{children}</div>
        )}
      </div>
    </div>
  );

  let isLink;
  if (href !== undefined) {
    isLink = href.charAt(0) === '/';
  }

  const cardContainer = isLink ? (
    <Link to={href} className={`${prefix}--tile--clickable`} {...linkProps}>
      {cardContent}
    </Link>
  ) : (
    <a href={href} className={`${prefix}--tile--clickable`} {...linkProps}>
      {cardContent}
    </a>
  );

  return (
    <Column colMd={4} colLg={4} noGutterSm {...rest}>
      {cardContainer}
    </Column>
  );
};

export default MiniCard;
