import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import {
  Launch20,
  Download20,
  ArrowRight20,
  Error20,
  Email20,
} from '@carbon/icons-react';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class ImageCard extends React.Component {
  render() {
    const {
      children,
      href,
      subTitle,
      title,
      titleColor,
      subTitleColor,
      iconColor,
      hoverColor,
      disabled,
      aspectRatio,
      actionIcon,
      className,
      ...rest
    } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const ImageCardClassNames = classnames([`${prefix}--image-card`], {
      [className]: className,
      [`${prefix}--image-card--disabled`]: disabled,
      [`${prefix}--image-card--dark`]: hoverColor === 'dark',
    });

    const aspectRatioClassNames = classnames([`${prefix}--aspect-ratio`], {
      [`${prefix}--aspect-ratio--2x1`]: aspectRatio === '2:1',
      [`${prefix}--aspect-ratio--1x2`]: aspectRatio === '1:2',
      [`${prefix}--aspect-ratio--1x1`]: aspectRatio === '1:1',
      [`${prefix}--aspect-ratio--16x9`]: aspectRatio === '16:9',
      [`${prefix}--aspect-ratio--4x3`]: aspectRatio === '4:3',
    });

    const carbonTileclassNames = classnames([`${prefix}--tile`], {
      [`${prefix}--tile--clickable`]: href !== undefined,
    });

    const titleClassNames = classnames([`${prefix}--image-card__title`], {
      [`${prefix}--image-card__title--dark`]: titleColor === 'dark',
    });

    const subTitleClassNames = classnames([`${prefix}--image-card__subtitle`], {
      [`${prefix}--image-card__subtitle--dark`]: subTitleColor === 'dark',
    });

    const iconClassNames = classnames([`${prefix}--image-card__icon--action`], {
      [`${prefix}--image-card__icon--action--dark`]: iconColor === 'dark',
    });

    const cardContent = (
      <>
        {title ? <h4 className={titleClassNames}>{title}</h4> : null}
        {subTitle ? <h5 className={subTitleClassNames}>{subTitle}</h5> : null}
        <div className={iconClassNames}>
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
          {actionIcon === 'disabled' || disabled === true ? (
            <Error20 aria-label="disabled" />
          ) : null}
        </div>
        <div className={`${prefix}--image-card__img`}>{children}</div>
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className={carbonTileclassNames}
        >
          {cardContent}
        </a>
      );
    }

    return (
      <div className={ImageCardClassNames} {...rest}>
        <div className={aspectRatioClassNames}>
          <div className={`${prefix}--aspect-ratio--object`}>
            {cardContainer}
          </div>
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

ImageCard.defaultProps = {
  disabled: false,
  aspectRatio: '1:1',
  titleColor: 'light',
  subTitleColor: 'light',
  iconColor: 'light',
  hoverColor: 'light',
};
