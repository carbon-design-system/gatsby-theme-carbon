import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { video, vimeo } from './Video.module.scss';

const Video = ({ vimeoId, title, ...props }) => {
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

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video className={video} controls type="video/mp4" {...props} />
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
