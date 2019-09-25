import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import slugify from 'slugify';
import cx from 'classnames';

import {
  tabsContainer,
  list,
  selectedItem,
  listItem,
  link,
} from './PageTabs.module.scss';

export default class PageTabs extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    slug: PropTypes.string,
  };

  render() {
    const { tabs, slug } = this.props;
    const currentTab = slug
      .split('/')
      .filter(Boolean)
      .slice(-1)[0];

    const pageTabs = tabs.map(tab => {
      const slugifiedTab = slugify(tab, { lower: true });
      const selected = slugifiedTab === currentTab;
      const currentTabRegex = new RegExp(`${currentTab}(?!-)`);
      const href = slug.replace(currentTabRegex, slugifiedTab);
      return (
        <li key={tab} className={cx({ [selectedItem]: selected }, listItem)}>
          <Link className={link} to={`${href}`}>
            {tab}
          </Link>
        </li>
      );
    });

    return (
      <div className={tabsContainer}>
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-12 bx--col-no-gutter">
              <nav>
                <ul className={list}>{pageTabs}</ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
