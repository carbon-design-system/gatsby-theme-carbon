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
  color: 'light',
  disabled: false,
  actionIcon: '',
};

export default class ArticleCard extends React.Component {
  render() {
    const {
      children,
      href,
      title,
      subTitle,
      author,
      date,
      readTime,
      color = defaults.color,
      disabled = defaults.disabled,
      actionIcon = defaults.actionIcon,
      className,
      ...rest
    } = this.props;

    // const prefix = 'cds';

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const ArticleCardClassNames = cx(className, `cds--article-card`, {
      [`cds--article-card--disabled`]: disabled,
      [`cds--article-card--dark`]: color === 'dark',
    });

    const aspectRatioClassNames = cx(
      [`cds--aspect-ratio`],
      [`cds--aspect-ratio--2x1`]
    );

    const cardContentClassNames = cx(
      [`cds--tile`],
      [`cds--tile--clickable`],
      [`cds--article-card_content`]
    );

    const cardContent = (
      <>
        <div className="cds--article-card__img">{children}</div>
        <div className={aspectRatioClassNames}>
          <div className="cds--aspect-ratio--object cds--article-card__tile">
            {subTitle ? (
              <h5 className="cds--article-card__subtitle">{subTitle}</h5>
            ) : null}
            {title ? (
              <h4 className="cds--article-card__title">{title}</h4>
            ) : null}
            <div className="cds--article-card__info">
              {author ? (
                <p className="cds--article-card__author">{author}</p>
              ) : null}
              {date ? <p className="cds--article-card__date">{date}</p> : null}
              {readTime ? (
                <p className="cds--article-card__read-time">{readTime}</p>
              ) : null}
            </div>
            <div className="cds--article-card__icon--action">
              {actionIcon === 'launch' && !disabled ? (
                <Launch size={20} aria-label="Open" />
              ) : null}
              {actionIcon === 'arrowRight' && !disabled ? (
                <ArrowRight size={20} aria-label="Open" />
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
          </div>
        </div>
      </>
    );

    let cardContainer;
    if (disabled === true) {
      cardContainer = (
        <div className={cardContentClassNames}>{cardContent}</div>
      );
    } else if (isLink === true) {
      cardContainer = (
        <Link to={href} className={cardContentClassNames} {...rest}>
          {cardContent}
        </Link>
      );
    } else {
      cardContainer = (
        <a href={href} className={cardContentClassNames} {...rest}>
          {cardContent}
        </a>
      );
    }

    return <div className={ArticleCardClassNames}>{cardContainer}</div>;
  }
}

ArticleCard.propTypes = {
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
