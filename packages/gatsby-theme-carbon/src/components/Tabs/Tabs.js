import React from 'react';
import {
  Tabs as CarbonTabs,
  Tab as CarbonTab,
  TabContent,
} from 'carbon-components-react';
import { tabContainer, tab, tabContents } from './Tabs.module.scss';

export const Tab = props => <CarbonTab className={tab} {...props}></CarbonTab>;

// Memoized for performance durring window resizing. The cloneElement implementation and
// subsequent memoization are necessary due to the following issue:
// https://github.com/carbon-design-system/carbon/issues/339
export const Tabs = React.memo(function Tabs(props) {
  return (
    <CarbonTabs className={tabContainer} tabContentClassName={tabContents}>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          renderContent: TabContent,
        })
      )}
    </CarbonTabs>
  );
});

Tabs.displayName = 'Tabs';
