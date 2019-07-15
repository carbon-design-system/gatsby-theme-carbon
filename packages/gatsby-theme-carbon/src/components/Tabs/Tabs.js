import React from 'react';
import {
  Tabs as CarbonTabs,
  Tab as CarbonTab,
  TabContent,
} from 'carbon-components-react';
import { tabContainer, tab, tabContents } from './Tabs.module.scss';

export const Tab = props => <CarbonTab className={tab} {...props}></CarbonTab>;

export const Tabs = React.memo(function Tabs(props) {
  return (
    <CarbonTabs className={tabContainer} tabContentClassName={tabContents}>
      {React.Children.map(props.children, child => {
        console.log('running');
        return React.cloneElement(child, {
          renderContent: TabContent,
        });
      })}
    </CarbonTabs>
  );
});

Tabs.displayName = 'Tabs';
