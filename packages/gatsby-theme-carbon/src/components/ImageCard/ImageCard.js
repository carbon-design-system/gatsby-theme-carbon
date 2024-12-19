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

const defaults = {
  disabled: false,
  aspectRatio: '1:1',
  titleColor: 'light',
  subTitleColor: 'light',
  iconColor: 'light',
  hoverColor: 'light',
};

export default class ImageCard extends React.Component {
  render() {
    const {
      children,
      href,
      subTitle,
      title,
      titleColor = defaults.titleColor,
      subTitleColor = defaults.subTitleColor,
      iconColor = defaults.iconColor,
      hoverColor = defaults.hoverColor,
      disabled = defaults.disabled,
      aspectRatio = defaults.aspectRatio,
      actionIcon,
      className,
      ...rest
    } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const ImageCardClassNames = cx(className, `cds--image-card`, {
      [`cds--image-card--disabled`]: disabled,
      [`cds--image-card--dark`]: hoverColor === 'dark',
    });

    const aspectRatioClassNames = cx(
      `cds--aspect-ratio`,
      `cds--image-card__spacing`,
      {
        [`cds--aspect-ratio--2x1`]: aspectRatio === '2:1',
        [`cds--aspect-ratio--1x2`]: aspectRatio === '1:2',
        [`cds--aspect-ratio--1x1`]: aspectRatio === '1:1',
        [`cds--aspect-ratio--16x9`]: aspectRatio === '16:9',
        [`cds--aspect-ratio--4x3`]: aspectRatio === '4:3',
      }
    );

    const carbonTileclassNames = cx(`cds--tile`, {
      [`cds--tile--clickable`]: href !== undefined,
    });

    const titleClassNames = cx(`cds--image-card__title`, {
      [`cds--image-card__title--dark`]: titleColor === 'dark',
    });

    const subTitleClassNames = cx(`cds--image-card__subtitle`, {
      [`cds--image-card__subtitle--dark`]: subTitleColor === 'dark',
    });

    const iconClassNames = cx(`cds--image-card__icon--action`, {
      [`cds--image-card__icon--action--dark`]: iconColor === 'dark',
    });

    const cardContent = (
      <>
        {subTitle ? <h5 className={subTitleClassNames}>{subTitle}</h5> : null}
        {title ? <h4 className={titleClassNames}>{title}</h4> : null}
        <div className={iconClassNames}>
          {actionIcon === 'launch' && !disabled ? (
            <Launch size={20} aria-label="Open resource" />
          ) : null}
          {actionIcon === 'arrowRight' && !disabled ? (
            <ArrowRight size={20} aria-label="Open resource" />
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
        <div className="cds--image-card__img">{children}</div>
      </>
    );

    let cardContainer;
    if (disabled === true || href === undefined) {
      cardContainer = <div className={carbonTileclassNames}>{cardContent}</div>;
    } else if (isLink === true) {
      cardContainer = (
        <Link to={href} className={carbonTileclassNames}>
          {cardContent}
        </Link>
      );
    } else {
      cardContainer = (
        <a href={href} className={carbonTileclassNames}>
          {cardContent}
        </a>
      );
    }

    return (
      <div className={ImageCardClassNames} {...rest}>
        <div className={aspectRatioClassNames}>
          <div className="cds--aspect-ratio--object">{cardContainer}</div>
        </div>
      </div>
    );
  }
}

ImageCard.propTypes = {
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
   * Set card aspect ratio, default is 1:1, options are 1:1, 16:9, 4:3, 2:1, 1:2
   */
  aspectRatio: PropTypes.string,

  /**
   * Use for disabled card
   */
  disabled: PropTypes.bool,

  /**
   * Specify a custom class
   */
  className: PropTypes.string,

  /**
   * Set title text color, default is light, options are light or dark
   */
  titleColor: PropTypes.string,

  /**
   * Set sub title text color, default is light, options are light or dark
   */
  subTitleColor: PropTypes.string,

  /**
   * Set icon color, default is light, options are light or dark
   */
  iconColor: PropTypes.string,

  /**
   * Set hover to lighten or darken the image, default is light, options are light or dark
   */
  hoverColor: PropTypes.string,

  /**
   * Props to pass through to link component
   */
  linkProps: PropTypes.object,
};
