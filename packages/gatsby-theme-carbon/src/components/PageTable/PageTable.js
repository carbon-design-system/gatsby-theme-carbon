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
      'ibm--col-lg-8 ibm--col-md-6': gridSize < 4,
      'ibm--col-lg-12': gridSize > 3,
      'ibm--offset-lg-4 ibm--col-bleed': true,
      'page-table__container': true,
    });

    return (
      <div className="ibm--row">
        <div className={classNames}>
          <table className="page-table">{children}</table>
        </div>
      </div>
    );
  }
}
