import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link, withPrefix } from 'gatsby';
import { ArrowRight20 } from '@carbon/icons-react';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class SquareCard extends React.Component {
  render() {
    const {
      children,
      href,
      smallTitle,
      largeTitle,
      disabled,
      actionIcon,
      className,
      ...rest
    } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const carbonTileclassNames = cx(
      [`${prefix}--tile`],
      [`${prefix}--tile--clickable`]
    );

    const cardContent = (
      <>
        {smallTitle ? (
          <h5 className={`${prefix}--resource-card__title--small`}>
            {smallTitle}
          </h5>
        ) : null}
        {largeTitle ? (
          <h4 className={`${prefix}--resource-card__title--large`}>
            {largeTitle}
          </h4>
        ) : null}
        {children ? (
          <p className={`${prefix}--resource-card__icon--body`}>{children}</p>
        ) : null}
        <div className={`${prefix}--resource-card__icon--action`}>
          {actionIcon === 'arrowRight' && !disabled ? (
            <ArrowRight20 aria-label="Open" />
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

    return <div>{cardContainer}</div>;
  }
}

SquareCard.propTypes = {
  children: PropTypes.node,

  /**
   * Set url for card
   */
  href: PropTypes.string,

  /**
   * Smaller heading
   */
  smallTitle: PropTypes.string,

  /**
   * Large heading
   */
  largeTitle: PropTypes.string,

  /**
   * Action icon is ArrowRight
   */
  actionIcon: PropTypes.string,

  /**
   * Use for disabled card
   */
  disabled: PropTypes.bool,

  /**
   * Specify a custom class
   */
  className: PropTypes.string,
};
