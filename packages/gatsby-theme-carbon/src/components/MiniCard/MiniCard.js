import React from 'react';
import { Link } from 'gatsby';
import {
  ArrowRight20,
  Calendar20,
  Download20,
  Email20,
  Launch20,
} from '@carbon/icons-react';
import cx from 'classnames';
import { settings } from 'carbon-components';
import styles from './MiniCard.module.scss';

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
  className,
  href,
  title,
  actionIcon,
  ...rest
}) => {
  const cardContent = (
    <div className={styles.card}>
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

  const cardContainer =
    href.charAt(0) === '/' ? (
      <Link
        to={href}
        className={cx(className, `${prefix}--tile--clickable`)}
        {...rest}
      >
        {cardContent}
      </Link>
    ) : (
      <a
        href={href}
        className={cx(className, `${prefix}--tile--clickable`)}
        {...rest}
      >
        {cardContent}
      </a>
    );

  return cardContainer;
};

export default MiniCard;
