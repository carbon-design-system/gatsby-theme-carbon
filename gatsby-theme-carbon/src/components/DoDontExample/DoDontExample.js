import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CheckmarkFilled24 from '@carbon/icons-react/es/checkmark--filled/24';
import Misuse24 from '@carbon/icons-react/es/misuse/24';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class DoDontExample extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /** title for the caption (optional) */
    label: PropTypes.string,
    /** description for the card caption (optional) */
    description: PropTypes.string,
    /** text displayed in the example card */
    text: PropTypes.string,
    /** path to the image displayed in the example card, starting under `src` folder. e.g.: `content/guidelines/content/img-test.svg` */
    imgpath: PropTypes.string,
    /** mark card as true? if not defined, card will be marked as false */
    correct: PropTypes.bool,
    /** default to false, set to true for dark background */
    dark: PropTypes.bool,
    /** default to false, set to true for forced aspect ratio */
    square: PropTypes.bool,
  };

  renderCaption = (label, description) => {
    if (label || description) {
      return (
        <div className={`${prefix}--example__caption`}>
          {label && <p className={`${prefix}--example__title`}>{label}</p>}
          {description && (
            <p className={`${prefix}--example__description`}>{description}</p>
          )}
        </div>
      );
    }
  };

  render() {
    const {
      children,
      label,
      description,
      text,
      dark,
      square,
      correct,
    } = this.props;

    const wrapperClassNames = classnames({
      [`${prefix}--example`]: true,
      [`${prefix}--example--square`]: square,
      [`${prefix}--example--correct`]: correct,
      [`${prefix}--example--incorrect`]: !correct,
      [`${prefix}--example--dark`]: dark,
    });

    const iconClassNames = classnames({
      [`${prefix}--example__icon`]: true,
      [`${prefix}--example__icon--correct`]: correct,
      [`${prefix}--example__icon--incorrect`]: !correct,
    });

    return (
      <div className={wrapperClassNames}>
        <div className={`${prefix}--example-card`}>
          <div className={`${prefix}--example-card__content`}>
            {correct ? (
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
        {this.renderCaption(label, description)}
      </div>
    );
  }
}
