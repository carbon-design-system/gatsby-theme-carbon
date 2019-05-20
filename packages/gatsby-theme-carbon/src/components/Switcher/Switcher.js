import React, { useContext } from 'react';
import { WebsiteSwitcher } from '@carbon/addons-website';
import PropTypes from 'prop-types';
import NavContext from '../../util/context/NavContext';
import { useScrollDirection } from '../../util/hooks';

const Switcher = ({ links }) => {
  const { switcherIsOpen, toggleNavState } = useContext(NavContext);
  const direction = useScrollDirection();

  if (direction === 'down' && switcherIsOpen) {
    toggleNavState('switcherIsOpen', 'close');
  }

  return (
    <WebsiteSwitcher
      isSwitcherFinal={switcherIsOpen}
      isSwitcherOpen={switcherIsOpen}
      links={links}
    />
  );
};

Switcher.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      linkText: PropTypes.string,
    })
  ),
};

export default Switcher;
