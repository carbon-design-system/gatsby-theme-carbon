import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { ZoomIn20 } from '@carbon/icons-react';

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

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboardEvent, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboardEvent, false);
  }

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

    return (
      <>
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
      </>
    );
  }
}

export default ImageComponent;
