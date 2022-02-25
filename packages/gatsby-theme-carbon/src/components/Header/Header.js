import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from '@carbon/react';
import { Switcher, Close } from '@carbon/react/icons';
import cx from 'classnames';

import HeaderNav from '../HeaderNav/HeaderNav';
import GlobalSearch from '../GlobalSearch';
import NavContext from '../../util/context/NavContext';
import useMetadata from '../../util/hooks/useMetadata';

import * as styles from './Header.module.scss';

const Header = ({ children }) => {
  const {
    leftNavIsOpen,
    toggleNavState,
    switcherIsOpen,
    searchIsOpen,
    switcherTooltipText = 'Switch sites',
  } = useContext(NavContext);
  const { isSearchEnabled, navigationStyle, isSwitcherEnabled } = useMetadata();

  return (
    <ShellHeader
      aria-label="Header"
      className={cx(styles.header, {
        [styles.headerWithHeaderNav]: navigationStyle,
      })}>
      <SkipToContent href="#main-content" className={styles.skipToContent} />
      <HeaderMenuButton
        className={cx(`cds--header__action--menu`, styles.headerButton)}
        aria-label="Open menu"
        onClick={() => {
          toggleNavState('leftNavIsOpen');
          toggleNavState('switcherIsOpen', 'close');
        }}
        isActive={leftNavIsOpen}
      />
      <Link
        className={cx(styles.headerName, {
          [styles.searchIsOpenOnLink]: searchIsOpen,
          [styles.headerNameWithHeaderNav]: navigationStyle,
        })}
        to="/">
        {children}
      </Link>
      {navigationStyle && <HeaderNav />}
      <HeaderGlobalBar
        className={cx({ [styles.searchIsOpenOnBar]: searchIsOpen })}>
        {isSearchEnabled && <GlobalSearch />}
        {isSwitcherEnabled && (
          <HeaderGlobalAction
            className={cx(styles.headerButton, styles.switcherButton, {
              [styles.switcherButtonOpen]: switcherIsOpen,
            })}
            aria-label={switcherTooltipText}
            tooltipAlignment="end"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('searchIsOpen', 'close');
              toggleNavState('leftNavIsOpen', 'close');
            }}>
            {switcherIsOpen ? <Close size={20} /> : <Switcher size={20} />}
          </HeaderGlobalAction>
        )}
      </HeaderGlobalBar>
    </ShellHeader>
  );
};

const DefaultHeaderText = () => (
  <>
    Carbon&nbsp;<span>Design System</span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;
