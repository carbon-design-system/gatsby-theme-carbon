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

const Header = () => {
  const { openState, toggleNav } = useContext(NavContext);
  return (
    <ShellHeader aria-label="Header" className="bx--header--website">
      <SkipToContent />
      <HeaderMenuButton
        className="bx--header__action--menu"
        aria-label="Open menu"
        onClick={() => toggleNav('leftNav')}
        isActive={openState.leftNav}
      />
      <HeaderName prefix="" to="/" element={Link}>
        Carbon&nbsp;<span>Design System</span>
      </HeaderName>
      <HeaderGlobalBar>
        <GlobalSearch />
        <HeaderGlobalAction
          className="bx--header__action--switcher"
          aria-label="Switch"
          onClick={() => {
            toggleNav('switcher');
            toggleNav('search', 'close');
          }}
        >
          {openState.switcher ? <Close20 /> : <AppSwitcher20 />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </ShellHeader>
  );
};

export default Header;
