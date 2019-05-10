import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class Vimeo extends React.Component {
  static propTypes = {
    vimeoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { vimeoId, title } = this.props;

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
  }
}
