import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import slugify from 'slugify';
import cx from 'classnames';
import usePrefix from '../../util/hooks/usePrefix';

const prefix = usePrefix();

import {
  tabsContainer,
  list,
  selectedItem,
  listItem,
  link,
} from './PageTabs.module.scss';

export default class PageTabs extends React.Component {
  render() {
    const { title, tabs, slug } = this.props;
    const currentTab = slug.split('/').filter(Boolean).slice(-1)[0];

    const pageTabs = tabs.map((tab) => {
      const slugifiedTab = slugify(tab, { lower: true, strict: true });
      const selected = slugifiedTab === currentTab;
      // matches with or without trailing slash: /?
      // matches with or without hash link: (#.*)?
      const currentTabRegex = new RegExp(`${currentTab}/?(#.*)?$`);
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
        <div className={`${prefix}--grid`}>
          <div className={`${prefix}--row`}>
            <div className={`${prefix}--col-lg-12 ${prefix}--col-no-gutter`}>
              <nav aria-label={title}>
                <ul className={list}>{pageTabs}</ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageTabs.propTypes = {
  tabs: PropTypes.array,
  slug: PropTypes.string,
};
