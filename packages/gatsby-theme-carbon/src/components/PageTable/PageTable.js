import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class PageTable extends React.Component {
  render() {
    const { children } = this.props;
    let gridSize;
    if (Array.isArray(children[1].props.children)) {
      gridSize = children[1].props.children[0].props.children.length;
    } else {
      gridSize = children[1].props.children.props.children.length;
    }

    const classNames = cx({
      [`cds--col-lg-8 cds--col-md-6`]: gridSize < 4,
      [`cds--col-lg-12`]: gridSize > 3,
      [` cds--col-no-gutter`]: true,
      'page-table__container': true,
    });

    return (
      <div className="cds--row">
        <div className={classNames}>
          <table className="page-table">{children}</table>
        </div>
      </div>
    );
  }
}

PageTable.propTypes = {
  children: PropTypes.node,
};
