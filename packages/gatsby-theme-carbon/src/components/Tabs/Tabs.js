// Gatsby doesn't include the recommended exceptions to this rule
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md#rule-details

import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { Dropdown } from 'carbon-components-react';
import { useMedia } from 'use-media';
import { breakpoints } from '@carbon/elements';
import { useId } from '../../util/hooks/useId';
import styles from './Tabs.module.scss';

function elementIsNullOrString(child) {
  return !child || typeof child.type === 'string';
}

const TabContext = createContext({});

const Select = ({ children, _id }) => {
  const { setActiveTab } = useContext(TabContext);
  const items = React.Children.map(children, (child, index) => ({
    label: child.props.label,
    index,
  }));
  return (
    <div style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
      <Dropdown
        size="xl"
        onChange={({ selectedItem }) => setActiveTab(selectedItem.index)}
        initialSelectedItem={items[0]}
        light
        label="tab selection"
        items={items}
        id={_id}
      ></Dropdown>
    </div>
  );
};

const TabList = ({ children, _id }) => {
  const { activeTab } = useContext(TabContext);
  return (
    <ul className={styles.tabList} role="tablist">
      {React.Children.map(children, (child, index) => {
        if (elementIsNullOrString(child)) return child;
        return React.cloneElement(child, {
          _id: `${_id}__${index}`,
          active: activeTab === index,
          index,
          tab: true,
        });
      })}
    </ul>
  );
};

export const Tab = ({ _id, label, active, index, tab, children }) => {
  const { setActiveTab, tabList } = useContext(TabContext);
  const buttonRef = useCallback(ref => tabList.push(ref), [tabList]);

  const onKeyDown = e => {
    let nextButton;
    switch (e.which) {
      case 35: // end
        e.preventDefault();
        tabList[tabList.length - 1].focus();
        break;
      case 36: // home
        e.preventDefault();
        tabList[0].focus();
        break;
      case 37: // left
        e.preventDefault();
        nextButton = tabList[index - 1] || tabList[tabList.length - 1];
        nextButton.focus();
        break;
      case 39: // right
        e.preventDefault();
        nextButton = tabList[index + 1] || tabList[0];
        nextButton.focus();
        break;
      default:
    }
  };

  if (tab) {
    return (
      <li role="presentation">
        <button
          className={styles.tab}
          ref={buttonRef}
          onKeyDown={onKeyDown}
          onClick={() => setActiveTab(index)}
          onFocus={() => setActiveTab(index)}
          type="button"
          role="tab"
          id={`${_id}--tab`}
          tabIndex={!active ? '-1' : '0'}
          aria-selected={active || undefined}
        >
          {label}
        </button>
      </li>
    );
  }

  return (
    <section
      className={styles.panel}
      hidden={!active}
      role="tabpanel"
      id={`${_id}--panel`}
      aria-labelledby={`${_id}--tab`}
    >
      {children}
    </section>
  );
};

export const Tabs = props => {
  const tabList = useRef([]);
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });
  const id = useId('tabs');

  // clear tablist when unmounted (switching between Select and TabList)
  useEffect(() => () => (tabList.current = []));

  return (
    <TabContext.Provider
      value={{ setActiveTab, activeTab, tabList: tabList.current }}
    >
      {isMobile ? (
        <Select _id={id}>{props.children}</Select>
      ) : (
        <TabList _id={id}>{props.children}</TabList>
      )}
      {React.Children.map(props.children, (child, index) => {
        if (elementIsNullOrString(child)) return child;
        return React.cloneElement(child, {
          _id: `${id}__${index}`,
          active: activeTab === index,
          index,
        });
      })}
    </TabContext.Provider>
  );
};

Tabs.displayName = 'Tabs';
