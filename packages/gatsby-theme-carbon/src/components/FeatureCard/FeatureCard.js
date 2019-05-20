import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Row, Column } from '../Grid';
import ResourceCard from '../ResourceCard';
import { settings } from 'carbon-components';

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
     * Use for dark card
     */
    dark: PropTypes.bool,

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
      dark,
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
          <Column noGutterSm>
            <div
              className={`${prefix}--feature-card__img ${prefix}--aspect-ratio--1x1`}
            >
              <div className={`${prefix}--aspect-ratio--object`}>
                {children}
              </div>
            </div>
          </Column>

          <Column
            className={`${prefix}--feature-card__row`}
            colMd={4}
            colLg={4}
            offsetLg={8}
            offsetMd={4}
            noGutterSm
          >
            <ResourceCard
              title={title}
              subTitle={subTitle}
              aspectRatio="2:1"
              href={href}
              actionIcon={actionIcon}
              //color={color}
              dark={dark}
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
