import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pageHeader, text, pageHeaderSticky } from './PageHeader.module.scss';

const PageHeader = ({ children, title, tabs = [] }) => (
  <div
    className={cx({
      [pageHeader]: pageHeader,
      [pageHeaderSticky]: tabs.length,
    })}
  >
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <h1 id="page-title" className={text}>
            {title}
          </h1>
        </div>
      </div>
    </div>
    {children}
  </div>
);

PageHeader.propTypes = {
  /**
   * Pass in the children that will be rendered within the PageHeader
   */
  children: PropTypes.node,

  /**
   * Specify the title for the page
   */
  title: PropTypes.string,
};

export default PageHeader;
