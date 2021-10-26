import React from 'react';
import PropTypes from 'prop-types';
import {
  fast01,
  fast02,
  moderate01,
  moderate02,
  slow01,
  slow02,
} from '@carbon/elements';

import * as styles from './MotionSpec.module.scss';

// [threshold, scale]
const scaleThresholds = [
  [2000, 1000],
  [1000, 500],
  [600, 250],
  [0, 100],
];

const durationTokens = Object.fromEntries(
  Object.entries({
    'fast-01': fast01,
    'fast-02': fast02,
    'moderate-01': moderate01,
    'moderate-02': moderate02,
    'slow-01': slow01,
    'slow-02': slow02,
  }).map(([k, v]) => [k, Number(v.replace('ms', ''))])
);

const MotionSpec = ({ className, spec, ...rest }) => {
  function getFormattedDuration(duration) {
    const index = Object.values(durationTokens).findIndex(
      (v) => v === duration
    );

    return Object.keys(durationTokens)[index] || `${duration}ms`;
  }

  const transformedSpec = spec.map((s) => ({
    ...s,
    transitions: s.transitions.map((t) => ({
      ...t,
      duration:
        typeof t.duration === 'string'
          ? durationTokens[t.duration]
          : t.duration,
      delay: typeof t.delay === 'string' ? durationTokens[t.delay] : t.delay,
    })),
  }));

  const max = Math.max(
    ...transformedSpec.flatMap(({ transitions }) =>
      transitions.map(({ duration, delay }) => duration + delay)
    )
  );

  const xScale = scaleThresholds.find(([threshold]) => threshold < max)[1];

  const tickInterval = xScale / 5;

  const width = Math.ceil((max + 1) / xScale) * xScale;
  const ticks = [...Array(width / tickInterval + 1)];

  return (
    <div className={className} {...rest}>
      <div className="bx--row">
        <div className="bx--col bx--col-no-gutter">
          <div className={styles.container}>
            {transformedSpec.map(({ element, transitions }) => (
              <>
                <h6 className={styles.yAxis}>{element}</h6>
                <div className={styles.timeline}>
                  {transitions.map(
                    ({ property, curve, mode, duration, delay, from, to }) => (
                      <div
                        className={styles.transition}
                        style={{
                          left: `${(delay / width) * 100}%`,
                          width: `${(duration / width) * 100}%`,
                        }}>
                        <div
                          className={styles.bar}
                          title={`${property}: ${from} - ${to}`}>
                          {property}: {from} &rarr; {to}
                        </div>
                        <div className={styles.details}>
                          {mode} {curve}, {getFormattedDuration(duration)}
                          {delay > 0 && (
                            <>
                              <br />
                              {getFormattedDuration(delay)} delay
                            </>
                          )}
                        </div>
                      </div>
                    )
                  )}
                  <div className={styles.ticks} aria-hidden>
                    {ticks.map((e, i) => (
                      <div
                        className={styles.yTick}
                        style={{
                          left: `calc(${
                            ((i * tickInterval) / width) * 100
                          }% - 1px)`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </>
            ))}
            <div className={styles.zeroCorner} aria-hidden>
              0ms
            </div>
            <div className={styles.xAxis} aria-hidden>
              {[...Array(width / xScale)].map((e, i) => (
                <div className={styles.xTick}>{(i + 1) * xScale}ms</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MotionSpec.propTypes = {
  className: PropTypes.string,
  spec: PropTypes.arrayOf(
    PropTypes.exact({
      element: PropTypes.string,
      transitions: PropTypes.arrayOf(
        PropTypes.exact({
          property: PropTypes.string,
          curve: PropTypes.oneOf(['standard', 'entrance', 'exit']),
          mode: PropTypes.oneOf(['productive', 'expressive']),
          duration: PropTypes.oneOf([
            PropTypes.number,
            'fast-01',
            'fast-02',
            'moderate-01',
            'moderate-02',
            'slow-01',
            'slow-02',
          ]),
          delay: PropTypes.oneOf([
            PropTypes.number,
            'fast-01',
            'fast-02',
            'moderate-01',
            'moderate-02',
            'slow-01',
            'slow-02',
          ]),
          from: PropTypes.string,
          to: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default MotionSpec;
