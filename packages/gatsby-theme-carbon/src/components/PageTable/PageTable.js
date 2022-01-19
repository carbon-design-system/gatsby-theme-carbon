import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import usePrefix from '../../util/hooks/usePrefix';

const prefix = usePrefix();

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
      [`${prefix}--col-lg-8 ${prefix}--col-md-6`]: gridSize < 4,
      [`${prefix}--col-lg-12`]: gridSize > 3,
      [` ${prefix}--col-no-gutter`]: true,
      'page-table__container': true,
    });

    return (
      <div className={`${prefix}--row`}>
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
