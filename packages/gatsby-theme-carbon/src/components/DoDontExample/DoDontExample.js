import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CheckmarkFilled, Misuse } from '@carbon/react/icons';

export default class DoDontExample extends React.Component {
  renderCaption = (caption, captionTitle) => {
    // const prefix = 'cds';
    if (caption || captionTitle) {
      return (
        <div className="cds--example__caption">
          {captionTitle && (
            <p className="cds--example__title">{captionTitle}</p>
          )}
          {caption && <p className="cds--example__description">{caption}</p>}
        </div>
      );
    }
  };

  render() {
    const { children, caption, captionTitle, text, aspectRatio, color, type } =
      this.props;
    // const prefix = 'cds';

    const wrapperClassNames = cx(`cds--example`, {
      [`cds--example--square`]: aspectRatio === '1:1',
      [`cds--example--correct`]: type === 'do',
      [`cds--example--incorrect`]: type !== 'do',
      [`cds--example--dark`]: color === 'dark',
    });

    const iconClassNames = cx(`cds--example__icon`, {
      [`cds--example__icon--correct`]: type === 'do',
      [`cds--example__icon--incorrect`]: type !== 'do',
    });

    return (
      <div className={wrapperClassNames}>
        <div className="cds--example-card">
          <div className="cds--example-card__content">
            {type === 'do' ? (
              <CheckmarkFilled size={24} className={iconClassNames} />
            ) : (
              <Misuse size={24} className={iconClassNames} />
            )}
            <div className="cds--example__content">
              {children}
              {text ? <p className="cds--example__text">{text}</p> : null}
            </div>
          </div>
        </div>
        {this.renderCaption(caption, captionTitle)}
      </div>
    );
  }
}

DoDontExample.propTypes = {
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
