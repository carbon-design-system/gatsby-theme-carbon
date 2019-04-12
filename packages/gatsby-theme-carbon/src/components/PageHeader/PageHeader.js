import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ children, title }) => (
  <div className="page-header">
    <div className="ibm--grid">
      <div className="ibm--row">
        <div className="ibm--col-lg-12 ibm--offset-lg-4">
          <h2
            id="page-title"
            className="page-header__title bx--type-display-01"
          >
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
