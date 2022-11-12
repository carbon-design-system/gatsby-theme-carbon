import React from 'react';
import { Link } from 'gatsby';
import {
  ArrowRight,
  Calendar,
  Download,
  Email,
  Launch,
} from '@carbon/react/icons';
import cx from 'classnames';

import * as styles from './MiniCard.module.scss';
import { Column } from '../Grid';

const getIcon = ({ actionIcon }) => {
  switch (actionIcon) {
    case 'arrowRight':
      return <ArrowRight size={20} aria-label="Open resource" />;
    case 'download':
      return <Download size={20} aria-label="Download" />;
    case 'email':
      return <Email size={20} aria-label="Email" />;
    case 'calendar':
      return <Calendar size={20} aria-label="Calendar" />;
    default:
      return <Launch size={20} aria-label="Open resource" />;
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
    <Link to={href} className="cds--tile--clickable" {...linkProps}>
      {cardContent}
    </Link>
  ) : (
    <a href={href} className="cds--tile--clickable" {...linkProps}>
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
