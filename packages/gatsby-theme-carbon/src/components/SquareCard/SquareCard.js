import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';
import {
  Launch,
  Download,
  ArrowRight,
  Error,
  Email,
} from '@carbon/react/icons';
import { Column } from '../Grid';
import * as styles from './SquareCard.module.scss';

const defaults = {
  color: 'light',
  disabled: false,
  smallTitle: false,
  actionIcon: 'arrowRight',
};

export default class SquareCard extends React.Component {
  render() {
    const {
      children,
      href,
      title,
      smallTitle = defaults.smallTitle,
      disabled = defaults.disabled,
      bodyText,
      helperText,
      className,
      actionIcon = defaults.actionIcon,
      color = defaults.color,
      ...rest
    } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const SquareCardClassNames = cx(className, styles.squareCard, {
      [styles.disabled]: disabled,
      [styles.darkMode]: color === 'dark',
    });

    const SquareCardTitleClassNames = cx(className, styles.title, {
      [styles.titleSmall]: smallTitle,
    });

    const carbonTileclassNames = cx([`cds--tile`], [`cds--tile--clickable`]);

    const aspectRatioClassNames = cx(
      `cds--aspect-ratio`,
      `cds--aspect-ratio--1x1`
    );

    const cardContent = (
      <>
        <h2 className={SquareCardTitleClassNames}>{title}</h2>
        {bodyText ? <p className={styles.body}>{bodyText}</p> : null}
        {helperText ? <p className={styles.helperText}>{helperText}</p> : null}
        {children ? <div className={styles.helperIcon}>{children}</div> : null}
        <div className={styles.actionIcon}>
          {actionIcon === 'arrowRight' && !disabled ? (
            <ArrowRight size={20} aria-label="Open resource" />
          ) : null}
          {actionIcon === 'launch' && !disabled ? (
            <Launch size={20} aria-label="Open resource" />
          ) : null}
          {actionIcon === 'download' && !disabled ? (
            <Download size={20} aria-label="Download" />
          ) : null}
          {actionIcon === 'email' && !disabled ? (
            <Email size={20} aria-label="Email" />
          ) : null}
          {actionIcon === 'disabled' || disabled === true ? (
            <Error size={20} aria-label="disabled" />
          ) : null}
        </div>
      </>
    );

    let cardContainer;
    if (disabled === true) {
      cardContainer = <div className={carbonTileclassNames}>{cardContent}</div>;
    } else if (isLink === true) {
      cardContainer = (
        <Link to={href} className={carbonTileclassNames} {...rest}>
          {cardContent}
        </Link>
      );
    } else {
      cardContainer = (
        <a href={href} className={carbonTileclassNames} {...rest}>
          {cardContent}
        </a>
      );
    }

    return (
      <Column
        colMd={4}
        colLg={4}
        noGutterSm
        className={SquareCardClassNames}
        {...rest}>
        <div className={aspectRatioClassNames}>
          <div className="cds--aspect-ratio--object">{cardContainer}</div>
        </div>
      </Column>
    );
  }
}

SquareCard.propTypes = {
  /**
   * Use to set a pictogram
   */
  children: PropTypes.node,

  /**
   * Set url for card
   */
  href: PropTypes.string,

  /**
   * Large heading
   */
  title: PropTypes.string,

  /**
   * Use to enable the smaller heading
   */
  smallTitle: PropTypes.bool,

  /**
   * Action icon, default is Arrow Right, options are Launch, ArrowRight, Download, Error
   */
  actionIcon: PropTypes.string,

  /**
   * Use for disabled card
   */
  disabled: PropTypes.bool,

  /**
   * Body text
   */
  bodyText: PropTypes.string,

  /**
   * Helper text
   */
  helperText: PropTypes.string,

  /**
   * set to "dark" for dark background card
   */
  color: PropTypes.string,

  /**
   * Specify a custom class
   */
  className: PropTypes.string,
};
