import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import slugify from 'slugify';

export default class PageTabs extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    slug: PropTypes.string,
    currentTab: PropTypes.string,
  };

  render() {
    const { tabs, slug, currentTab } = this.props;
    const pageTabs = tabs.map(tab => {
      const slugifiedTab = slugify(tab, { lower: true });
      const selected = slugifiedTab === currentTab;
      const href = slug.replace(currentTab, slugifiedTab);

      return (
        <li key={tab} className={selected ? 'selected' : ''}>
          <Link to={`${href}`}>{tab}</Link>
        </li>
      );
    });
    return (
      <div className="page-tabs">
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-12 bx--col-no-gutter">
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
