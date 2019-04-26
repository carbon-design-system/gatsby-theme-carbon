import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class Overlay extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    /** caption (optional) */
    caption: PropTypes.string,
    /** default to false, set to true for dark background */
    dark: PropTypes.string,
    show: PropTypes.bool,
  };
  state = {
    showOverlay: false,
  };

  getImage(reactTree, image) {
    React.Children.forEach(reactTree, node => {
      if (node.type === 'img') {
        image.title = node.props.title;
        image.src = node.props.src;
        image.alt = node.props.alt;
        image.caption = node.props.caption;
      } else if (node.props && node.props.children) {
        this.getImage(node.props.children, image);
      }
    });

    return image;
  }

  render() {
    const image = this.getImage(this.props.children, {});
    //const { children } = this.props;
    const displayTitle = image.title ? image.title : this.props.caption;

    return (
      <div className={`${prefix}--overlay-content`}>
        <div className={`${prefix}--overlay-bg`} />
        <div className={`${prefix}--overlay-leftArea`} show={this.props.show}>
          <div
            className={`${prefix}--overlay-caption ${prefix}--type-heading-02`}>
            {displayTitle}
          </div>
        </div>
        <div className={`${prefix}--overlay-centerArea`} show={this.props.show}>
          <img
            className={`${prefix}--overlay-image`}
            src={image.src}
            alt={image.alt}
          />
        </div>
        <div className={`${prefix}--overlay-rightArea`} show={this.props.show}>
          {this.props.closeElement}
        </div>
      </div>
    );
  }
}

Overlay.propTypes = {
  /**
   * Specify an array of links
   */
};
