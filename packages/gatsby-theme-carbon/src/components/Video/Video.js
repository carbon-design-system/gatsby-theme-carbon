import { Play, Pause } from '@carbon/react/icons';
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withPrefix } from 'gatsby';
import {
  video,
  videoButton,
  videoContainer,
  vimeo,
  videoIsPlaying,
} from './Video.module.scss';
import usePathPrefix from '../../util/hooks/usePathprefix';

const defaults = {
  autoPlay: false,
};

const Video = ({
  autoPlay = defaults.autoPlay,
  vimeoId,
  title,
  src,
  poster,
  muted,
  ...props
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const pathPrefix = usePathPrefix();
  const videoRef = useRef(null);
  const iframeRef = useRef(null);
  const buttonClassName = cx(videoButton, {
    [videoIsPlaying]: isPlaying,
  });

  // React doesn't handle the muted attribute well
  // https://github.com/facebook/react/issues/10389#issuecomment-605689475
  useEffect(() => {
    if (muted && videoRef.current) {
      videoRef.current.setAttribute('muted', '');
    }
  }, [muted]);

  // If a video/poster is imported into an MDX file and provided through
  // a js variable, it will already have the path-prefix.
  //
  // If the src/poster is just a reference to a file in the static directory,
  // then we need to prefix for them.
  const srcContainsPrefix = pathPrefix && src && src.includes(pathPrefix);
  const fixedSrc = srcContainsPrefix ? src : withPrefix(src);

  const posterContainsPrefix =
    pathPrefix && poster && poster.includes(pathPrefix);
  const fixedPoster = posterContainsPrefix ? poster : withPrefix(poster);

  if (vimeoId) {
    return (
      <div className={videoContainer}>
        <div className={cx(video, vimeo)}>
          <div className="embedVideo-container">
            <iframe
              allow="autoplay"
              title={title}
              src={`https://player.vimeo.com/video/${vimeoId}`}
              ref={iframeRef}
              width="640"
              height="360"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

  function onClick(e) {
    e.stopPropagation();
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
      .catch((error) => {
        console.log(error);
      });
  }

  function onEnded() {
    setIsPlaying(false);
  }

  function onKeyDown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
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
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className={videoContainer}>
      <div
        className={buttonClassName}
        role="button"
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex="0">
        {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        <span className="cds--assistive-text">
          {isPlaying ? 'Pause' : 'Play'}
        </span>
      </div>
      <video
        autoPlay={autoPlay}
        className={video}
        type="video/mp4"
        ref={videoRef}
        onEnded={onEnded}
        src={fixedSrc}
        poster={fixedPoster}
        {...props}
      />
    </div>
  );
};

Video.propTypes = {
  autoPlay: PropTypes.bool,
  vimeoId: PropTypes.string,
  children: PropTypes.element,
  src: PropTypes.string,
  title: PropTypes.string,
  poster: PropTypes.string,
  videoSourceValidator: (props) => {
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
