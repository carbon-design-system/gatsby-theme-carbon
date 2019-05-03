import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import Launch20 from '@carbon/icons-react/es/launch/20';
import Download20 from '@carbon/icons-react/es/download/20';
import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20';
import Error20 from '@carbon/icons-react/es/error/20';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class ResourceTile extends React.Component {
  static propTypes = {
    children: PropTypes.node,

    /**
     * Set url for tile
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
     * Set tile aspect ratio, default is 2:1, options are 1:1, 16:9, 4:3
     */
    aspectRatio: PropTypes.bool,

    /**
     * Use for dark tile
     */
    dark: PropTypes.bool,

    /**
     * Use for disabled tile
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
      aspectRatio,
      actionIcon,
      className,
    } = this.props;

    let isLink;
    if (href !== undefined) {
      isLink = href.charAt(0) === '/';
    }

    const classNames = classnames([`${prefix}--resource-tile`], {
      [className]: className,
      [`${prefix}--resource-tile--disabled`]: disabled,
      [`${prefix}--resource-tile--dark`]: dark,
    });

    const aspectRatioClassNames = classnames([`${prefix}--aspect-ratio`], {
      [`${prefix}--aspect-ratio--2x1`]: aspectRatio === '2:1',
      [`${prefix}--aspect-ratio--1x1`]: aspectRatio === '1:1',
      [`${prefix}--aspect-ratio--16x9`]: aspectRatio === '16:9',
      [`${prefix}--aspect-ratio--4x3`]: aspectRatio === '4:3',
    });

    const carbonTileclassNames = classnames(
      [`${prefix}--tile`],
      [`${prefix}--tile--clickable`]
    );

    const tileContent = (
      <>
        <h5 className={`${prefix}--resource-tile__subtitle`}>{subTitle}</h5>
        <h4 className={`${prefix}--resource-tile__title`}>{title}</h4>
        <div className={`${prefix}--resource-tile__icon--img`}>{children}</div>
        <div className={`${prefix}--resource-tile__icon--action`}>
          {actionIcon === 'launch' && !disabled ? (
            <Launch20 aria-label="Open resource" />
          ) : null}
          {actionIcon === 'arrowRight' && !disabled ? (
            <ArrowRight20 aria-label="Open resource" />
          ) : null}
          {actionIcon === 'download' && !disabled ? (
            <Download20 aria-label="Download" />
          ) : null}
          {actionIcon === 'disabled' || disabled === true ? (
            <Error20 aria-label="disabled" />
          ) : null}
        </div>
      </>
    );

    let tileContainer;
    if (disabled === true) {
      tileContainer = <div className={carbonTileclassNames}>{tileContent}</div>;
    } else if (isLink === true) {
      tileContainer = (
        <Link to={href} className={carbonTileclassNames}>
          {tileContent}
        </Link>
      );
    } else {
      tileContainer = (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          className={carbonTileclassNames}
        >
          {tileContent}
        </a>
      );
    }

    return (
      <div className={classNames}>
        <div className={aspectRatioClassNames}>
          <div className={`${prefix}--aspect-ratio--object`}>
            {tileContainer}
          </div>
        </div>
      </div>
    );
  }
}
