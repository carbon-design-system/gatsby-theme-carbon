import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CheckmarkFilled, Misuse } from '@carbon/react/icons';
import { Column } from '../Grid';
import * as styles from './DoDontRow.module.scss';

const defaults = {
  type: 'do',
};
export default class DoDont extends React.Component {
  static renderCaption = (caption, captionTitle) => {
    if (caption || captionTitle) {
      return (
        <div className={styles.caption}>
          {captionTitle && <p className={styles.title}>{captionTitle}</p>}
          {caption && <p className={styles.description}>{caption}</p>}
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
      type = defaults.type,
      className,
      ...columnProps
    } = this.props;

    const iconClassNames = cx(styles.icon, {
      [styles.iconCorrect]: type === 'do',
      [styles.iconIncorrect]: type === 'dont',
    });

    const wrapperClassNames = cx(className, styles.example, {
      [styles.correct]: type === 'do',
      [styles.incorrect]: type === 'dont',
      [styles.dark]: color === 'dark',
      [styles.ratio]:
        aspectRatio === '1:1' ||
        aspectRatio === '2:1' ||
        aspectRatio === '1:2' ||
        aspectRatio === '4:3' ||
        aspectRatio === '3:4' ||
        aspectRatio === '9:16' ||
        aspectRatio === '16:9',
      [styles.ratio1x1]: aspectRatio === '1:1',
      [styles.ratio2x1]: aspectRatio === '2:1',
      [styles.ratio1x2]: aspectRatio === '1:2',
      [styles.ratio4x3]: aspectRatio === '4:3',
      [styles.ratio3x4]: aspectRatio === '3:4',
      [styles.ratio9x16]: aspectRatio === '9:16',
      [styles.ratio16x9]: aspectRatio === '16:9',
    });

    return (
      <Column colMd={4} colLg={4} {...columnProps}>
        <div className={wrapperClassNames}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {type === 'do' ? (
                <CheckmarkFilled size={24} className={iconClassNames} />
              ) : (
                <Misuse size={24} className={iconClassNames} />
              )}
              <div className={styles.content}>
                {children}
                {text ? <p className={styles.text}>{text}</p> : null}
              </div>
            </div>
          </div>
          {DoDont.renderCaption(caption, captionTitle)}
        </div>
      </Column>
    );
  }
}

DoDont.propTypes = {
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
  /** set to "do" for do, and "dont" for dont */
  type: PropTypes.string,
};
