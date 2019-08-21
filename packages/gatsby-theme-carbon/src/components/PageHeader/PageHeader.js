import React from 'react';
import PropTypes from 'prop-types';
import { pageHeader, text } from './PageHeader.module.scss';

const PageHeader = ({ title }) => (
  <div className={pageHeader}>
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <h1 id="page-title" className={text}>
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
  title: PropTypes.string,
};

export default PageHeader;
