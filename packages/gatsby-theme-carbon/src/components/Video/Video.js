import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class Vimeo extends React.Component {
  static propTypes = {
    vimeoId: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
    poster: PropTypes.string,
  };

  static defaultProps = {
    src: '',
    vimeoId: '',
  };

  render() {
    const { vimeoId, title, src, poster } = this.props;

    const vimeoVid = (
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
    );

    const videoVid = (
      <video controls poster={poster}>
        <source src={src} type="video/mp4" />
      </video>
    );

    return (
      <div className={`${prefix}--video`}>
        {src === '' && vimeoId === '' ? (
          <p>Please add a vimeoId or src to your video component</p>
        ) : null}
        {src !== '' ? <>{videoVid}</> : null}
        {vimeoId !== '' ? <>{vimeoVid}</> : null}
      </div>
    );
  }
}
