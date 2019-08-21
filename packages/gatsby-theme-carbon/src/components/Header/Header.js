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
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';

import GlobalSearch from '../GlobalSearch';
import NavContext from '../../util/context/NavContext';
import useMetadata from '../../util/hooks/useMetadata';

import {
  hidden,
  header,
  switcherButtonOpen,
  skipToContent,
} from './Header.module.scss';

const Header = ({ children }) => {
  const { leftNavIsOpen, toggleNavState, switcherIsOpen } = useContext(
    NavContext
  );
  const { isSearchEnabled } = useMetadata();

  return (
    <>
      <ShellHeader
        aria-label="Header"
        className={cx({
          [header]: true,
          [hidden]: false,
        })}
      >
        <SkipToContent className={skipToContent} />
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
            className={cx({
              [switcherButtonOpen]: switcherIsOpen,
            })}
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
