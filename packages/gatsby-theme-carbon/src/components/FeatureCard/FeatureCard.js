import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { settings } from 'carbon-components';
import { Row, Column } from '../Grid';
import ResourceCard from '../ResourceCard';

const { prefix } = settings;

export default class FeatureCard extends React.Component {
  static propTypes = {
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
    dark: false,
    disabled: false,
    aspectRatio: '2:1',
    actionIcon: 'launch',
  };

  render() {
    const {
      children,
      href,
      subTitle,
      title,
      color,
      disabled,
      actionIcon,
      className,
    } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const FeatureCardClassNames = classnames([`${prefix}--feature-card`], {
      [className]: className,
    });

    const cardContent = (
      <>
        <Row>
          <Column noGutterMdLeft>
            <div
              className={`${prefix}--feature-card__img ${prefix}--aspect-ratio--1x1`}
            >
              <div className={`${prefix}--aspect-ratio--object`}>
                {children}
              </div>
            </div>
          </Column>
        </Row>
        <Row className={`${prefix}--feature-card__row`}>
          <Column
            colMd={4}
            colLg={4}
            offsetLg={8}
            offsetMd={4}
            noGutterMdLeft
            className={`${prefix}--feature-card__column`}
          >
            <ResourceCard
              title={title}
              subTitle={subTitle}
              aspectRatio="2:1"
              href={href}
              actionIcon={actionIcon}
              color={color}
              disabled={disabled}
            />
          </Column>
        </Row>
      </>
    );

    let cardContainer;
    if (disabled === true) {
      cardContainer = <div>{cardContent}</div>;
    } else if (isLink === true && !disabled) {
      cardContainer = (
        <Link className={`${prefix}--feature-card__link`} to={href}>
          {cardContent}
        </Link>
      );
    } else {
      cardContainer = (
        <a
          className={`${prefix}--feature-card__link`}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {cardContent}
        </a>
      );
    }

    return <div className={FeatureCardClassNames}>{cardContainer}</div>;
  }
}
