import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default class PageTabs extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    slug: PropTypes.string,
    currentTab: PropTypes.string,
  };

  render() {
    const { tabs, slug, currentTab } = this.props;
    const linkSlug = slug.substring(0, slug.lastIndexOf(currentTab));
    const pageTabs = tabs.map(tab => (
      <li
        key={tab}
        className={
          tab
            .toLowerCase()
            .split(' ')
            .join('-') === currentTab
            ? 'selected'
            : ''
        }
      >
        <Link
          to={`${linkSlug}${tab
            .toLowerCase()
            .split(' ')
            .join('-')}`}
        >
          {tab}
        </Link>
      </li>
    ));
    return (
      <div className="page-tabs">
        <div className="ibm--grid">
          <div className="ibm--row">
            <div className="ibm--col-lg-12 ibm--offset-lg-4 ibm--col-bleed">
              <nav>
                <ul className="page-tabs__list">{pageTabs}</ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
