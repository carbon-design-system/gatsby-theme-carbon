import React, { useState } from 'react';
import {
  FaceDissatisfied,
  FaceNeutral,
  FaceSatisfied,
  FaceDissatisfiedFilled,
  FaceNeutralFilled,
  FaceSatisfiedFilled,
} from '@carbon/react/icons';
import cx from 'classnames';

import * as styles from './Experience.module.scss';

const NEGATIVE = 'feedback-form-negative';
const NEUTRAL = 'feedback-form-neutral';
const POSITIVE = 'feedback-form-positive';

const Experience = React.forwardRef((props, ref) => {
  const [selected, setSelected] = useState(NEUTRAL);

  const onExperienceChange = (e) => {
    setSelected(e.target.id);
  };

  return (
    <fieldset onChange={onExperienceChange}>
      <legend>Rate your experience:</legend>
      <div className={styles.experienceContainer}>
        <label
          className={cx(styles.experience, {
            [styles.selected]: selected === NEGATIVE,
          })}
          htmlFor={NEGATIVE}>
          <input
            ref={selected === NEGATIVE ? ref : undefined}
            aria-label={NEGATIVE}
            type="radio"
            id={NEGATIVE}
            defaultChecked={selected === NEGATIVE}
            name="feedback-form-experience"
            value="Negative"
          />
          <span>Negative</span>
          {selected === NEGATIVE ? (
            <FaceDissatisfiedFilled size={32} />
          ) : (
            <FaceDissatisfied size={32} />
          )}
        </label>

        <label
          className={cx(styles.experience, {
            [styles.selected]: selected === NEUTRAL,
          })}
          htmlFor={NEUTRAL}>
          <input
            ref={selected === NEUTRAL ? ref : undefined}
            aria-label={NEUTRAL}
            type="radio"
            id={NEUTRAL}
            defaultChecked={selected === NEUTRAL}
            name="feedback-form-experience"
            value="Neutral"
          />
          <span>Neutral</span>
          {selected === NEUTRAL ? (
            <FaceNeutralFilled size={32} />
          ) : (
            <FaceNeutral size={32} />
          )}
        </label>

        <label
          className={cx(styles.experience, {
            [styles.selected]: selected === POSITIVE,
          })}
          htmlFor={POSITIVE}>
          <input
            ref={selected === POSITIVE ? ref : undefined}
            type="radio"
            aria-label={POSITIVE}
            id={POSITIVE}
            defaultChecked={selected === POSITIVE}
            name="feedback-form-experience"
            value="Positive"
          />
          <span>Positive</span>
          {selected === POSITIVE ? (
            <FaceSatisfiedFilled size={32} />
          ) : (
            <FaceSatisfied size={32} />
          )}
        </label>
      </div>
    </fieldset>
  );
});

Experience.displayName = 'Experience';

export default Experience;
