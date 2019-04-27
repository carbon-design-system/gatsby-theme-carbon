import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import Close32 from '@carbon/icons-react/es/close/32';
import ZoomIn20 from '@carbon/icons-react/es/zoom--in/20';
import Overlay from '../Overlay';

const { prefix } = settings;

class ImageComponent extends Component {
  static propTypes = {
    caption: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    bg: PropTypes.string,
    zoom: PropTypes.bool,
  };

  static defaultProps = {
    zoom: false,
  };

  state = {
    showOverlay: false,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboardEvent, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboardEvent, false);
  }

  handleKeyboardEvent = e => {
    const { key } = e;
    if (this.state.showOverlay && key === 'Escape') {
      this.setState({ showOverlay: false }, () => {
        document.body.style.overflow = 'visible';
      });
    }
  };

  handleImageClick = () => {
    if (this.props.zoom) {
      if (window.innerWidth < 672) return;
      this.setState({ showOverlay: true }, () => {
        document.body.style.overflow = 'hidden';
      });
    }
  };

  handleCloseClick = () => {
    this.setState({ showOverlay: false }, () => {
      document.body.style.overflow = 'visible';
    });
  };

  render() {
    const { caption, children, className, bg, zoom } = this.props;

    const imgComponentClasses = classnames(className, {
      [`${prefix}--image-component`]: true,
      [`${prefix}--image-component--no-caption`]: caption === undefined,
      [`${prefix}--transparent-bg`]: bg === 'none',
    });

    const imgWrapperClasses = classnames({
      [`${prefix}--image-component-wrapper-zoom`]: zoom,
    });

    if (this.state.showOverlay)
      return (
        <Overlay
          show={this.state.showOverlay}
          caption={caption}
          closeElement={
            <div
              className={`${prefix}--imageZoom-close`}
              onClick={this.handleCloseClick}
            >
              <Close32 />
            </div>
          }
        >
          {children}
        </Overlay>
      );

    return (
      <div
        className={`${prefix}--image-component__container`}
        onClick={this.handleImageClick}
      >
        <div className={imgWrapperClasses}>
          <div className={imgComponentClasses}>{children}</div>
          {zoom && (
            <div className={`${prefix}--image-component-magnifier`}>
              <ZoomIn20 />
            </div>
          )}
        </div>

        {caption && (
          <p className={`${prefix}--image-component__caption`}>{caption}</p>
        )}
      </div>
    );
  }
}

export default ImageComponent;
