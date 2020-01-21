import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CheckmarkFilled24, Misuse24 } from '@carbon/icons-react';
import { Column } from '../Grid';
import styles from './DoDontRow.module.scss';

export default class DoDont extends React.Component {
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
    /** set to "do" for do, and "dont" for dont */
    type: PropTypes.string,
  };

  renderCaption = (caption, captionTitle) => {
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
      type,
      ...columnProps
    } = this.props;

    const iconClassNames = classnames({
      [styles.icon]: true,
      [styles.iconCorrect]: type === 'do',
      [styles.iconIncorrect]: type === 'dont',
    });

    const wrapperClassNames = classnames({
      [styles.example]: true,
      [styles.correct]: type === 'do',
      [styles.incorrect]: type === 'dont',
      [styles.square]: aspectRatio === '1:1',
      [styles.dark]: color === 'dark',
    });

    return (
      <Column colMd={4} colLg={4} {...columnProps}>
        <div className={wrapperClassNames}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {type === 'do' ? (
                <CheckmarkFilled24 className={iconClassNames} />
              ) : (
                <Misuse24 className={iconClassNames} />
              )}
              <div className={styles.content}>
                {children}
                {text ? <p className={styles.text}>{text}</p> : null}
              </div>
            </div>
          </div>
          {this.renderCaption(caption, captionTitle)}
        </div>
      </Column>
    );
  }
}

DoDont.defaultProps = {
  type: 'do',
};
