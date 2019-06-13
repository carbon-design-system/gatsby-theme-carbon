import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';

const { prefix } = settings;

export const Video = ({ vimeoId, title, src, poster, ...props }) => {
  if (vimeoId !== '') {
    return (
      <div className={`${prefix}--video`}>
        <div className="gatsby-resp-iframe-wrapper">
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
      </div>
    );
  } else if (src !== '') {
    return (
      <video
        className={`${prefix}--video`}
        controls
        poster={poster}
        {...props}
        src={src}
        type="video/mp4"
      />
    );
  } else {
    return <p>Please add a vimeoId or src to your video component</p>;
  }
};

Video.defaultProps = {
  src: '',
  vimeoId: '',
};

Video.propTypes = {
  vimeoId: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  poster: PropTypes.string,
};

export default Video;
