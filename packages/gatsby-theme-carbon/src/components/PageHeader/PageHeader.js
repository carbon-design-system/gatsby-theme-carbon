import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  pageHeader,
  text,
  pageHeaderSticky,
  pageHeaderShifted,
} from './PageHeader.module.scss';

const PageHeader = ({ children, title, tabs = [], shouldHideHeader }) => (
  <div
    className={cx({
      [pageHeader]: pageHeader,
      [pageHeaderSticky]: tabs.length,
      [pageHeaderShifted]: shouldHideHeader,
    })}
  >
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <h2 id="page-title" className={text}>
            {title}
          </h2>
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
