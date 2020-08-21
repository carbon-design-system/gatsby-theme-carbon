import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './PageHeader.module.scss';

const PageHeader = ({ title, headerBgColor, headerFontColor, tabs = [] }) => (
  <div
    className={cx(style.pageHeader, headerBgColor, {
      [style.withTabs]: tabs.length,
    })}>
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <h1 id="page-title" className={cx(style.text, headerFontColor)}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  </div>
);

PageHeader.propTypes = {
  /**
   * Specify the title for the page
   */
  title: PropTypes.node,
};

export default PageHeader;
