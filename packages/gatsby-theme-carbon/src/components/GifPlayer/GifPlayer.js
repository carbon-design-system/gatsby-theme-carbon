import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  PlayOutline,
  PlayOutlineFilled,
  PauseOutline,
  PauseOutlineFilled,
} from '@carbon/react/icons';
import * as styles from './GifPlayer.module.scss';

const Pause = ({ hovering }) =>
  hovering ? <PauseOutlineFilled size={24} /> : <PauseOutline size={24} />;

const Play = ({ hovering }) =>
  hovering ? <PlayOutlineFilled size={24} /> : <PlayOutline size={24} />;

const ToggleIcon = ({ paused, hovering }) =>
  paused ? <Play hovering={hovering} /> : <Pause hovering={hovering} />;

const defaults = {
  color: 'light',
  isInDialog: false,
};

const GifPlayer = ({
  children,
  color = defaults.color,
  className,
  isInDialog = defaults.isInDialog,
}) => {
  const [paused, setPaused] = useState(false);

  const [hovering, setHovering] = useState(false);
  const onClick = (e) => {
    e.stopPropagation();
    setPaused(!paused);
  };

  const controlsClassNames = cx(styles.controls, {
    [styles.dark]: color === 'dark',
  });

  const containerClassNames = cx(className, styles.container, {
    [styles.gifInDialog]: isInDialog,
  });

  const staticImageClassNames = cx(styles.imgHidden, {
    [styles.imgDisplayed]: paused,
  });

  const gifClassNames = cx(styles.gifDisplayed, {
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
        aria-hidden={paused ? false : 'true'}>
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
        onKeyDown={(e) => {
          // Stop keyDown event from propogating to ImageGalleryImage component.
          e.stopPropagation();
        }}>
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

export default GifPlayer;
