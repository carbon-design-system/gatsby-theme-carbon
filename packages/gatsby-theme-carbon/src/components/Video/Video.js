import { Play32, Pause32 } from '@carbon/icons-react';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  video,
  videoButton,
  videoContainer,
  vimeo,
  videoIsPlaying,
} from './Video.module.scss';

const Video = ({ vimeoId, title, ...props }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const buttonClassName = cx(videoButton, {
    [videoIsPlaying]: isPlaying,
  });

  useEffect(() => {
    if (vimeoId) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.controls = false;
    }
  });

  if (vimeoId) {
    return (
      <div className={cx(video, vimeo)}>
        <div className="embedVideo-container">
          <iframe
            title={title}
            src={`https://player.vimeo.com/video/${vimeoId}`}
            width="640"
            height="360"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  function onClick() {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      return;
    }

    return videoRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function onEnded() {
    setIsPlaying(false);
  }

  return (
    <div className={videoContainer}>
      <button className={buttonClassName} type="button" onClick={onClick}>
        {isPlaying ? <Pause32 /> : <Play32 />}
        <span className="bx--assistive-text">
          {isPlaying ? 'Pause' : 'Play'}
        </span>
      </button>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className={video}
        type="video/mp4"
        ref={videoRef}
        controls
        onEnded={onEnded}
        {...props}
      />
    </div>
  );
};

Video.propTypes = {
  vimeoId: PropTypes.string,
  children: PropTypes.element,
  src: PropTypes.string,
  title: PropTypes.string,
  poster: PropTypes.string,
  videoSourceValidator: props => {
    if (!props.vimeoId && !props.src) {
      return new Error(
        `The Video component requires either a 'vimeoId' Or a 'src' prop`
      );
    }
    if (props.vimeoId && props.src) {
      return new Error(
        `You can only specify one source for the Video component. Use either the 'vimeoId' OR the 'src' prop.`
      );
    }
    if (props.vimeoId && props.poster) {
      return new Error(
        `You can't specify a poster for vimeo videos. You can control the poster image from the Vimeo control panel`
      );
    }
    if (props.vimeoId && props.children) {
      return new Error(
        `You can't specify children/tracks for vimeo videos. You can control the captions from the Vimeo control panel`
      );
    }
  },
};

export default Video;
