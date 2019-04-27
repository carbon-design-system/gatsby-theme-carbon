import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PageTable extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    let gridSize;
    if (Array.isArray(children[1].props.children)) {
      gridSize = children[1].props.children[0].props.children.length;
    } else {
      gridSize = children[1].props.children.props.children.length;
    }

    const classNames = classnames({
      'bx--col-lg-8 bx--col-md-6': gridSize < 4,
      'bx--col-lg-12': gridSize > 3,
      'bx--col-no-gutter': true,
      'page-table__container': true,
    });

    return (
      <div className="bx--row">
        <div className={classNames}>
          <table className="page-table">{children}</table>
        </div>
      </div>
    );
  }
}
