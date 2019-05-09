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
import GlobalSearch from './GlobalSearch';
import NavContext from '../util/context/NavContext';

const Header = ({ children }) => {
  const { leftNavIsOpen, toggleNavState, switcherIsOpen } = useContext(
    NavContext
  );
  return (
    <ShellHeader aria-label="Header" className="bx--header--website">
      <SkipToContent />
      <HeaderMenuButton
        className="bx--header__action--menu"
        aria-label="Open menu"
        onClick={() => toggleNavState('leftNavIsOpen')}
        isActive={leftNavIsOpen}
      />
      <HeaderName prefix="" to="/" element={Link}>
        {children}
      </HeaderName>
      <HeaderGlobalBar>
        <GlobalSearch />
        <HeaderGlobalAction
          className="bx--header__action--switcher"
          aria-label="Switch"
          onClick={() => {
            toggleNavState('switcherIsOpen');
            toggleNavState('searchIsOpen', 'close');
          }}
        >
          {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
        </HeaderGlobalAction>
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
