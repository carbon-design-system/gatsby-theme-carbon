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

const GifPlayer = ({ children, color, className, isInDialog }) => {
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
    [styles.gifInDialog]: isInDialog,
  });

  const staticImageClassNames = classnames({
    [styles.imgHidden]: true,
    [styles.imgDisplayed]: paused,
  });

  const gifClassNames = classnames({
    [styles.gifDisplayed]: true,
    [styles.gifHidden]: paused,
  });

  const childrenArray = React.Children.toArray(children);

  const labelText = paused
    ? 'Toggleable animation paused'
    : 'Toggleable animation playing';

  return (
    <div className={containerClassNames}>
      <div className={gifClassNames} aria-hidden={paused ? 'true' : false}>
        {childrenArray[0]}
      </div>
      <div
        className={staticImageClassNames}
        aria-hidden={paused ? false : 'true'}
      >
        {childrenArray[1]}
      </div>
      <button
        aria-pressed={paused ? 'true' : 'false'}
        type="button"
        aria-label={labelText}
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
  /**
   * Specify if icon color should be "dark" or "light"
   */
  color: PropTypes.string,
  /**
   * Specify optional className
   */
  className: PropTypes.string,
  /**
   * Only pass in the 2 images to be rendered, first must be gif, second must be static image
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * Specify if the gifPlayer is inside the expanded ImageGallery (see ImageGallery.js)
   */
  isInDialog: PropTypes.bool,
};

GifPlayer.defaultProps = {
  color: 'light',
  isInDialog: false,
};

export default GifPlayer;
