import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link, withPrefix } from 'gatsby';
import {
  ArrowRight,
  Calendar,
  Download,
  Email,
  Error,
  Launch,
} from '@carbon/react/icons';
import { AspectRatio } from '@carbon/react';

const defaults = {
  color: 'light',
  disabled: false,
  aspectRatio: '2:1',
  actionIcon: 'launch',
};

export default class ResourceCard extends React.Component {
  render() {
    const {
      children,
      href,
      subTitle,
      title,
      color = defaults.color,
      disabled = defaults.disabled,
      aspectRatio = defaults.aspectRatio,
      actionIcon = defaults.actionIcon,
      className,
      ...rest
    } = this.props;

    let isLink;
    if (href !== undefined && !rest.download) {
      isLink = href.charAt(0) === '/';
    }

    const ResourceCardClassNames = cx(className, `cds--resource-card`, {
      [`cds--resource-card--disabled`]: disabled,
      [`cds--resource-card--dark`]: color === 'dark',
    });

    const carbonTileclassNames = cx([`cds--tile`], {
      [`cds--tile--clickable`]: href !== undefined,
    });

    const cardContent = (
      <>
        {subTitle && (
          <h5 className="cds--resource-card__subtitle">{subTitle}</h5>
        )}
        {title && <h4 className="cds--resource-card__title">{title}</h4>}
        <div className="cds--resource-card__icon--img">{children}</div>
        <div className="cds--resource-card__icon--action">
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
          {actionIcon === 'calendar' && !disabled ? (
            <Calendar size={20} aria-label="Calendar" />
          ) : null}
          {actionIcon === 'disabled' || disabled === true ? (
            <Error size={20} aria-label="disabled" />
          ) : null}
        </div>
      </>
    );

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
      // The URL is assumed to be external if an http protocol is present or defaulted (i.e. it is a protocal-relative URL).
      const isExternalURL = /^(https?:)?\/\//g.test(href);

      // Prepend the path prefix in production.
      const hrefPrefixed = withPrefix(href);

      cardContainer = (
        <a
          href={rest.download && !isExternalURL ? hrefPrefixed : href}
          className={carbonTileclassNames}
          {...rest}>
          {cardContent}
        </a>
      );
    }

    return (
      <div className={ResourceCardClassNames}>
        <AspectRatio ratio={`${aspectRatio.replace(':', 'x')}`}>
          <div className="cds--aspect-ratio--object">{cardContainer}</div>
        </AspectRatio>
      </div>
    );
  }
}

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
};
