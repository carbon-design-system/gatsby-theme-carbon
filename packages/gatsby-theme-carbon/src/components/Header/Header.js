import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import AppSwitcher20 from '@carbon/icons-react/es/app-switcher/20';
import Close20 from '@carbon/icons-react/es/close/20';
import cx from 'classnames';

import { useScrollDirection } from '../../util/hooks';

import GlobalSearch from '../GlobalSearch';
import NavContext from '../../util/context/NavContext';
import useMetadata from '../../util/hooks/useMetadata';

import { hidden, header } from './Header.module.scss';

const Header = ({ children, shouldHideHeader }) => {
  const { leftNavIsOpen, toggleNavState, switcherIsOpen } = useContext(
    NavContext
  );
  const direction = useScrollDirection();
  const { isSearchEnabled } = useMetadata();

  const isHidden = shouldHideHeader && direction === 'down';

  return (
    <>
      <ShellHeader
        aria-label="Header"
        className={cx({
          [header]: true,
          [hidden]: isHidden,
        })}
      >
        <SkipToContent />
        <HeaderMenuButton
          className="bx--header__action--menu"
          aria-label="Open menu"
          onClick={() => {
            toggleNavState('leftNavIsOpen');
            toggleNavState('switcherIsOpen', 'close');
          }}
          isActive={leftNavIsOpen}
        />
        <HeaderName prefix="" to="/" element={Link}>
          {children}
        </HeaderName>
        <HeaderGlobalBar>
          {isSearchEnabled && <GlobalSearch />}
          <HeaderGlobalAction
            className="bx--header__action--switcher"
            aria-label="Switch"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('searchIsOpen', 'close');
              toggleNavState('leftNavIsOpen', 'close');
            }}
          >
            {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </ShellHeader>
    </>
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
