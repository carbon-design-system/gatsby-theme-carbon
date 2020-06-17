import React from 'react';
import { Link } from 'gatsby';
import {
  Launch20,
  Download20,
  ArrowRight20,
  Calendar20,
  Email20,
} from '@carbon/icons-react';
import cx from 'classnames';
import { settings } from 'carbon-components';
import styles from './MiniCard.module.scss';

const { prefix } = settings;

const MiniCard = ({
  children,
  className,
  href,
  title,
  actionIcon = 'launch',
  ...rest
}) => {
  const icons = (
    <>
      {actionIcon === 'launch' ? <Launch20 aria-label="Open resource" /> : null}
      {actionIcon === 'arrowRight' ? (
        <ArrowRight20 aria-label="Open resource" />
      ) : null}
      {actionIcon === 'download' ? <Download20 aria-label="Download" /> : null}
      {actionIcon === 'email' ? <Email20 aria-label="Email" /> : null}
      {actionIcon === 'calendar' ? <Calendar20 aria-label="Calendar" /> : null}
    </>
  );

  const cardContent = (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        {children === undefined ? (
          <div className={styles.icon}>{icons}</div>
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
