import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as styles from './PageHeader.module.scss';

const PageHeader = ({ title, theme, tabs = [] }) => (
  <div
    className={cx(styles.pageHeader, {
      [styles.withTabs]: tabs.length,
      [styles.darkMode]: theme === 'dark',
    })}>
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <h1 id="page-title" className={styles.text}>
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
