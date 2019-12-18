import React, {
  useContext,
  createContext,
  useState,
  useRef,
  useCallback,
} from 'react';
import { useId } from '../../util/hooks/useId';
import styles from './Tabs.module.scss';

function elementIsNullOrString(child) {
  return !child || typeof child.type === 'string';
}

const TabContext = createContext({});

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
  const { current: tabList } = useRef([]);
  const [activeTab, setActiveTab] = useState(0);
  const id = useId('tabs');

  return (
    <TabContext.Provider value={{ setActiveTab, tabList }}>
      <ul className={styles.tabList} role="tablist">
        {React.Children.map(props.children, (child, index) => {
          if (elementIsNullOrString(child)) return child;
          return React.cloneElement(child, {
            _id: `${id}__${index}`,
            active: activeTab === index,
            index,
            tab: true,
          });
        })}
      </ul>
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
