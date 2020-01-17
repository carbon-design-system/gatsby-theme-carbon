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

export default class ArticleCard extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Set url for card
     */
    href: PropTypes.string,

    /**
     * Title
     */
    title: PropTypes.string,

    /**
     * sub title
     */
    subTitle: PropTypes.string,

    /**
     * Author
     */
    author: PropTypes.string,

    /**
     * date
     */
    date: PropTypes.string,

    /**
     * Reat time of article
     */
    readTime: PropTypes.string,

    /**
     * Action icon, default is blank, options are Launch, ArrowRight, Download
     */
    actionIcon: PropTypes.string,

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

  static defaultProps = {
    color: 'light',
    disabled: false,
    actionIcon: '',
  };

  render() {
    const {
      children,
      href,
      title,
      subTitle,
      author,
      date,
      readTime,
      color,
      disabled,
      actionIcon,
      className,
      ...rest
    } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const ArticleCardClassNames = classnames([`${prefix}--article-card`], {
      [className]: className,
      [`${prefix}--article-card--disabled`]: disabled,
      [`${prefix}--article-card--dark`]: color === 'dark',
    });

    const aspectRatioClassNames = classnames(
      [`${prefix}--aspect-ratio`],
      [`${prefix}--aspect-ratio--2x1`]
    );

    const carbonTileclassNames = classnames(
      [`${prefix}--tile`],
      [`${prefix}--tile--clickable`]
    );

    const cardContent = (
      <>
        <div className={`${prefix}--article-card__img`}>{children}</div>
        <div className={aspectRatioClassNames}>
          <div
            className={`${prefix}--aspect-ratio--object ${prefix}--article-card__tile`}
          >
            {subTitle ? (
              <h5 className={`${prefix}--article-card__subtitle`}>
                {subTitle}
              </h5>
            ) : null}
            {title ? (
              <h4 className={`${prefix}--article-card__title`}>{title}</h4>
            ) : null}
            <div className={`${prefix}--article-card__info`}>
              {author ? (
                <p className={`${prefix}--article-card__author`}>{author}</p>
              ) : null}
              {date ? (
                <p className={`${prefix}--article-card__date`}>{date}</p>
              ) : null}
              {readTime ? (
                <p className={`${prefix}--article-card__read-time`}>
                  {readTime}
                </p>
              ) : null}
            </div>
            <div className={`${prefix}--article-card__icon--action`}>
              {actionIcon === 'launch' && !disabled ? (
                <Launch20 aria-label="Open" />
              ) : null}
              {actionIcon === 'arrowRight' && !disabled ? (
                <ArrowRight20 aria-label="Open" />
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
          </div>
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className={carbonTileclassNames}
          {...rest}
        >
          {cardContent}
        </a>
      );
    }

    return <div className={ArticleCardClassNames}>{cardContainer}</div>;
  }
}
