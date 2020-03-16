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

const Experience = React.forwardRef(function Experience(props, ref) {
  const [selected, setSelected] = useState(NEUTRAL);

  const onExperienceChange = e => {
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
          htmlFor={NEGATIVE}
        >
          <input
            ref={selected === NEGATIVE ? ref : undefined}
            type="radio"
            id={NEGATIVE}
            defaultChecked={selected === NEGATIVE}
            name="feedback-form-experience"
            value="Negative"
          />
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
          <input
            ref={selected === NEUTRAL ? ref : undefined}
            type="radio"
            id={NEUTRAL}
            defaultChecked={selected === NEUTRAL}
            name="feedback-form-experience"
            value="Neutral"
          />
          <span>Neutral</span>
          {selected === NEUTRAL ? <FaceNeutralFilled32 /> : <FaceNeutral32 />}
        </label>

        <label
          className={cx(styles.experience, {
            [styles.selected]: selected === POSITIVE,
          })}
          htmlFor={POSITIVE}
        >
          <input
            ref={selected === POSITIVE ? ref : undefined}
            type="radio"
            id={POSITIVE}
            defaultChecked={selected === POSITIVE}
            name="feedback-form-experience"
            value="Positive"
          />
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
});

export default Experience;
