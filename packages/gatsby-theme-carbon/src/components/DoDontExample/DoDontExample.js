import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CheckmarkFilled24, Misuse24 } from '@carbon/icons-react';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class DoDontExample extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /** title for the caption (optional) */
    caption: PropTypes.string,
    /** description for the card caption (optional) */
    captionTitle: PropTypes.string,
    /** text displayed in the example card */
    text: PropTypes.string,
    /** 1:1 to force square example */
    aspectRatio: PropTypes.string,
    /** set to "dark" for dark background card */
    color: PropTypes.string,
    /** set to "do" to show green check, otherwise shows pink X */
    type: PropTypes.string,
  };

  renderCaption = (caption, captionTitle) => {
    if (caption || captionTitle) {
      return (
        <div className={`${prefix}--example__caption`}>
          {captionTitle && (
            <p className={`${prefix}--example__title`}>{captionTitle}</p>
          )}
          {caption && (
            <p className={`${prefix}--example__description`}>{caption}</p>
          )}
        </div>
      );
    }
  };

  render() {
    const {
      children,
      caption,
      captionTitle,
      text,
      aspectRatio,
      color,
      type,
    } = this.props;

    const wrapperClassNames = classnames({
      [`${prefix}--example`]: true,
      [`${prefix}--example--square`]: aspectRatio === '1:1',
      [`${prefix}--example--correct`]: type === 'do',
      [`${prefix}--example--incorrect`]: type !== 'do',
      [`${prefix}--example--dark`]: color === 'dark',
    });

    const iconClassNames = classnames({
      [`${prefix}--example__icon`]: true,
      [`${prefix}--example__icon--correct`]: type === 'do',
      [`${prefix}--example__icon--incorrect`]: type !== 'do',
    });

    return (
      <div className={wrapperClassNames}>
        <div className={`${prefix}--example-card`}>
          <div className={`${prefix}--example-card__content`}>
            {type === 'do' ? (
              <CheckmarkFilled24 className={iconClassNames} />
            ) : (
              <Misuse24 className={iconClassNames} />
            )}
            <div className={`${prefix}--example__content`}>
              {children}
              {text ? (
                <p className={`${prefix}--example__text`}>{text}</p>
              ) : null}
            </div>
          </div>
        </div>
        {this.renderCaption(caption, captionTitle)}
      </div>
    );
  }
}
