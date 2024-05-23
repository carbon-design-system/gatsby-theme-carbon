import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CheckmarkFilled, Misuse } from '@carbon/react/icons';

export default class DoDontExample extends React.Component {
  static renderCaption = (caption, captionTitle) => {
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

    const wrapperClassNames = cx(`cds--example`, {
      [`cds--example--ratio`]:
        aspectRatio === '1:1' ||
        aspectRatio === '2:1' ||
        aspectRatio === '1:2' ||
        aspectRatio === '4:3' ||
        aspectRatio === '3:4' ||
        aspectRatio === '9:16' ||
        aspectRatio === '16:9',
      [`cds--example--1x1`]: aspectRatio === '1:1',
      [`cds--example--2x1`]: aspectRatio === '2:1',
      [`cds--example--1x2`]: aspectRatio === '1:2',
      [`cds--example--4x3`]: aspectRatio === '4:3',
      [`cds--example--3x4`]: aspectRatio === '3:4',
      [`cds--example--9x16`]: aspectRatio === '9:16',
      [`cds--example--16x9`]: aspectRatio === '16:9',
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
        {DoDontExample.renderCaption(caption, captionTitle)}
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
