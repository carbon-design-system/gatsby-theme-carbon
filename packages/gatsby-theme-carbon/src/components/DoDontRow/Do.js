import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CheckmarkFilled24 } from '@carbon/icons-react';
import { Column } from '../Grid';
import {
  exampleCaption,
  exampleTitle,
  exampleDescription,
  exampleIcon,
  exampleIconCorrect,
  exampleCorrect,
  example,
  exampleSquare,
  exampleDark,
  exampleCard,
  exampleCardContent,
  exampleContent,
  exampleText,
} from './DoDontRow.module.scss';

export default class Do extends React.Component {
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
    colSm: PropTypes.number,
    colMd: PropTypes.number,
    colLg: PropTypes.number,
  };

  renderCaption = (caption, captionTitle) => {
    if (caption || captionTitle) {
      return (
        <div className={exampleCaption}>
          {captionTitle && <p className={exampleTitle}>{captionTitle}</p>}
          {caption && <p className={exampleDescription}>{caption}</p>}
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
      colSm,
      colMd,
      colLg,
    } = this.props;

    const iconClassNames = classnames({
      [exampleIcon]: true,
      [exampleIconCorrect]: true,
    });

    const wrapperClassNames = classnames({
      [example]: true,
      [exampleCorrect]: true,
      [exampleSquare]: aspectRatio === '1:1',
      [exampleDark]: color === 'dark',
    });

    return (
      <Column colSm={colSm} colMd={colMd} colLg={colLg}>
        <div className={wrapperClassNames}>
          <div className={exampleCard}>
            <div className={exampleCardContent}>
              <CheckmarkFilled24 className={iconClassNames} />
              <div className={exampleContent}>
                {children}
                {text ? <p className={exampleText}>{text}</p> : null}
              </div>
            </div>
          </div>
          {this.renderCaption(caption, captionTitle)}
        </div>
      </Column>
    );
  }
}
