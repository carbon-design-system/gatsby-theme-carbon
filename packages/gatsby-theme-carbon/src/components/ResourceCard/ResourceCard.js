import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import {
  ArrowRight20,
  Calendar20,
  Download20,
  Error20,
  Email20,
  Launch20,
} from '@carbon/icons-react';
import { settings } from 'carbon-components';

const { prefix } = settings;

const ResourceCard = ({
  children,
  href,
  subTitle,
  title,
  color = 'light',
  disabled = false,
  aspectRatio = '2:1',
  actionIcon = 'launch',
  className,
  type = 'default',
  ...rest
}) => {
  let isLink;
  if (href !== undefined) {
    isLink = href.charAt(0) === '/';
  }

  // This represents the variant of Resource Card: default, disabled, dark, and mini.
  const ResourceCardClassNames = classnames(`${prefix}--resource-card`, {
    [className]: className,
    [`${prefix}--resource-card--disabled`]: disabled,
    [`${prefix}--resource-card--dark`]: color === 'dark',
    [`${prefix}--resource-card--mini`]: type === 'mini',
  });

  // This gives the Resource Card it's properties for handling links
  const carbonTileclassNames = classnames(`${prefix}--tile`, {
    [`${prefix}--tile--clickable`]: href !== undefined,
  });

  // These are all the icons available to the resource card.
  const icons = (
    <>
      {actionIcon === 'launch' && !disabled ? (
        <Launch20 aria-label="Open resource" />
      ) : null}
      {actionIcon === 'arrowRight' && !disabled ? (
        <ArrowRight20 aria-label="Open resource" />
      ) : null}
      {actionIcon === 'download' && !disabled ? (
        <Download20 aria-label="Download" />
      ) : null}
      {actionIcon === 'email' && !disabled ? (
        <Email20 aria-label="Email" />
      ) : null}
      {actionIcon === 'calendar' && !disabled ? (
        <Calendar20 aria-label="Calendar" />
      ) : null}
      {actionIcon === 'disabled' || disabled === true ? (
        <Error20 aria-label="disabled" />
      ) : null}
    </>
  );

  // This determines the size of the title prop. productive-heading-03 for default and body-long-02 for Mini.
  const titleClassNames = classnames({
    [`${prefix}--resource-card__title`]: type === 'default',
    [`${prefix}--resource-card__mini-title`]: type === 'mini',
  });

  // This determines how and where the icons and image (children) are placed on the page.
  let iconsAndImages;

  if (type === 'default') {
    iconsAndImages = (
      <>
        <div className={`${prefix}--resource-card__icon--img`}>{children}</div>
        <div className={`${prefix}--resource-card__icon--action`}>{icons}</div>
      </>
    );
  } else if (type === 'mini') {
    if (children === undefined) {
      iconsAndImages = (
        <div className={`${prefix}--resource-card__mini-icon--action`}>
          {icons}
        </div>
      );
    } else {
      iconsAndImages = (
        <div className={`${prefix}--resource-card__mini-icon--img`}>
          {children}
        </div>
      );
    }
  }

  // This holds the subtitle, title, icons and images.
  const cardContent = (
    <>
      {subTitle && (
        <h5 className={`${prefix}--resource-card__subtitle`}>{subTitle}</h5>
      )}
      {title && <h4 className={titleClassNames}>{title}</h4>}
      {iconsAndImages}
    </>
  );

  // This determines if the tile has a link or not. If not, it disables the card. If it has a link, then it will determine whether the link that is supplied is staying internal to the site or if it's leaving the site.
  let cardContainer;
  if (disabled === true || href === undefined) {
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

  // This determines, based whether the card is default or not, whether or not it gets the aspect-ratio, aspect-ration--object, and aspect-ratio-X:X classes and associated divs.
  const aspectRatioClassNames =
    type === 'default' ? (
      <div
        className={`${prefix}--aspect-ratio ${prefix}--aspect-ratio--${aspectRatio.replace(
          ':',
          'x'
        )}`}
      >
        <div className={`${prefix}--aspect-ratio--object`}>{cardContainer}</div>
      </div>
    ) : (
      // This skips supplying the aspect ratio divs and just passes the cardContainer right on through.
      cardContainer
    );

  return (
    <div {...rest} className={ResourceCardClassNames}>
      {aspectRatioClassNames}
    </div>
  );
};

ResourceCard.propTypes = {
  children: PropTypes.node,

  /**
   * Set url for card
   */
  href: PropTypes.string,

  /**
   * Smaller heading
   */
  subTitle: PropTypes.string,

  /**
   * Large heading
   */
  title: PropTypes.string,

  /**
   * Action icon, default is launch, options are Launch, ArrowRight, Download, Error
   */
  actionIcon: PropTypes.string,

  /**
   * Set card aspect ratio, default is 2:1, options are 1:1, 16:9, 4:3
   */
  aspectRatio: PropTypes.string,

  /**
   * set to "dark" for dark background card
   */
  color: PropTypes.string,

  /**
   * Use for disabled card
   */
  disabled: PropTypes.bool,

  /**
   * Specify a custom class
   */
  className: PropTypes.string,

  /**
   * Specify mini card vs default card
   */
  type: PropTypes.string,
};

export default ResourceCard;
