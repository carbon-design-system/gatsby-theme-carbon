import React from 'react';
import { Tabs as CarbonTabs, Tab as CarbonTab } from 'carbon-components-react';
import { tabContainer, tab, tabContents } from './Tabs.module.scss';

export const Tab = props => <CarbonTab className={tab} {...props} />;

export const Tabs = props => (
  <CarbonTabs
    className={tabContainer}
    tabContentClassName={tabContents}
    {...props}
  />
);
