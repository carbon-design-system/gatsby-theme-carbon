import React, { useState } from 'react';
import {
  FaceDissatisfied32,
  FaceNeutral32,
  FaceSatisfied32,
  FaceDissatisfiedFilled32,
  FaceNeutralFilled32,
  FaceSatisfiedFilled32,
} from '@carbon/icons-react';
import cx from 'classnames';

import styles from './Experience.module.scss';

const NEGATIVE = 'feedback-form-negative';
const NEUTRAL = 'feedback-form-neutral';
const POSITIVE = 'feedback-form-positive';

const Experience = () => {
  const [selected, setSelected] = useState();

  const onExperienceChange = e => {
    setSelected(e.target.id);
  };

  return (
    <fieldset onChange={onExperienceChange}>
      <legend>Rate your experience</legend>
      <div className={styles.experienceContainer}>
        <label
          className={cx(styles.experience, {
            [styles.selected]: selected === NEGATIVE,
          })}
          htmlFor={NEGATIVE}
        >
          <input type="radio" id={NEGATIVE} name="feedback-form-experience" />
          <span>Negative</span>
          {selected === NEGATIVE ? (
            <FaceDissatisfiedFilled32 />
          ) : (
            <FaceDissatisfied32 />
          )}
        </label>

        <label
          className={cx(styles.experience, {
            [styles.selected]: selected === NEUTRAL,
          })}
          htmlFor={NEUTRAL}
        >
          <input type="radio" id={NEUTRAL} name="feedback-form-experience" />
          <span>Neutral</span>
          {selected === NEUTRAL ? <FaceNeutralFilled32 /> : <FaceNeutral32 />}
        </label>

        <label
          className={cx(styles.experience, {
            [styles.selected]: selected === POSITIVE,
          })}
          htmlFor={POSITIVE}
        >
          <input type="radio" id={POSITIVE} name="feedback-form-experience" />
          <span>Positive</span>
          {selected === POSITIVE ? (
            <FaceSatisfiedFilled32 />
          ) : (
            <FaceSatisfied32 />
          )}
        </label>
      </div>
    </fieldset>
  );
};

export default Experience;
