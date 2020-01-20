import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  PlayOutline24,
  PlayOutlineFilled24,
  PauseOutline24,
  PauseOutlineFilled24,
} from '@carbon/icons-react';
import styles from './GifPlayer.module.scss';

const Pause = ({ hovering }) =>
  hovering ? <PauseOutlineFilled24 /> : <PauseOutline24 />;

const Play = ({ hovering }) =>
  hovering ? <PlayOutlineFilled24 /> : <PlayOutline24 />;

const ToggleIcon = ({ paused, hovering }) =>
  paused ? <Play hovering={hovering} /> : <Pause hovering={hovering} />;

const GifPlayer = ({ children, color, className }) => {
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const onClick = () => {
    setPaused(!paused);
  };

  const controlsClassNames = classnames({
    [styles.controls]: true,
    [styles.dark]: color === 'dark',
  });

  const containerClassNames = classnames({
    [styles.container]: true,
    [className]: className,
  });

  const childrenArray = React.Children.toArray(children);

  return (
    <div className={containerClassNames}>
      {paused ? childrenArray[1] : childrenArray[0]}
      <button
        type="button"
        aria-label="play pause toggle"
        className={controlsClassNames}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={onClick}
      >
        <ToggleIcon hovering={hovering} paused={paused} />
      </button>
    </div>
  );
};

GifPlayer.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

GifPlayer.defaultProps = {
  color: 'light',
};

export default GifPlayer;
