import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { settings } from "carbon-components";

const { prefix } = settings;

class ImageComponent extends Component {
  static propTypes = {
    caption: PropTypes.string,
    cols: PropTypes.number,
    children: PropTypes.node,
    border: PropTypes.string,
    className: PropTypes.string,
    fixed: PropTypes.string,
    bg: PropTypes.string
  };

  static defaultProps = {
    cols: "12"
  };

  render() {
    const {
      caption,
      children,
      cols,
      border,
      className,
      fixed,
      bg
    } = this.props;
    const columnClasses = classnames({
      [`${prefix}--col-lg-12`]: cols == 12,
      [`${prefix}--col-lg-8`]: cols == 8,
      [`${prefix}--col-lg-6 ${prefix}--col-md-6`]: cols == 6,
      [`${prefix}--col-lg-4`]: cols == 4
    });
    const imgComponentClasses = classnames(
      [`${prefix}--image-component`],
      className,
      {
        "no-caption": caption === undefined,
        border: border === "true",
        "transparent-bg": bg === "none",
        "fixed-default": fixed === "default",
        "fixed-large": fixed === "large"
      }
    );

    return (
      <div className={`${prefix}--row ${prefix}--image-component__container`}>
        <div className={columnClasses}>
          <div className={imgComponentClasses}>{children}</div>
        </div>
        {caption && (
          <div className={`${prefix}--col-lg-4 ${prefix}--col-md-4`}>
            <p className={`${prefix}--image-component__caption`}>{caption}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ImageComponent;
