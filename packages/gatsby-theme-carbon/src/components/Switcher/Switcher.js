import React, { useContext, useRef, useLayoutEffect, useState } from 'react';
import cx from 'classnames';
import useMedia from 'use-media';
import NavContext from '../../util/context/NavContext';
import { nav, open, divider, link, linkDisabled } from './Switcher.module.scss';

const Switcher = ({ children }) => {
  const lgBreakpoint = useMedia('min-width: 1056px');
  const { switcherIsOpen } = useContext(NavContext);
  const listRef = useRef(null);
  const [height, setHeight] = useState(0);

  // calculate and update height
  useLayoutEffect(() => {
    if (switcherIsOpen) {
      setHeight(listRef.current.offsetHeight + 40);
    } else {
      setHeight(0);
    }
  }, [listRef, switcherIsOpen]);

  const maxHeight = !lgBreakpoint && switcherIsOpen ? '100%' : `${height}px`;

  return (
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
      aria-label="IBM Design ecosystem navigation"
      tabIndex="-1"
      style={{ maxHeight }}
    >
      <ul ref={listRef}>{children}</ul>
    </nav>
  );
};

export const SwitcherDivider = (props) => (
  <li className={divider}>
    <span {...props} />
  </li>
);

export const SwitcherLink = ({
  disabled,
  children,
  href: hrefProp,
  ...rest
}) => {
  const href = disabled || !hrefProp ? undefined : hrefProp;
  const className = disabled ? linkDisabled : link;
  const { switcherIsOpen } = useContext(NavContext);
  const openTabIndex = disabled ? '-1' : 0;

  return (
    <li>
      <a
        aria-disabled={disabled}
        role="button"
        tabIndex={switcherIsOpen ? openTabIndex : '-1'}
        className={className}
        href={href}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};

// https://css-tricks.com/using-css-transitions-auto-dimensions/
// Note: if you change this, update the max-height in the switcher stylesheet
const DefaultChildren = () => {
  const eventLaunch = new Date('December 2, 2019');
  const today = new Date();

  // TODO: remove after 12/2/2019 launch
  const eventProps =
    today >= eventLaunch
      ? { href: 'https://www.ibm.com/design/event/' }
      : { disabled: true };

  return (
    <>
      <SwitcherLink href="https://ibm.com/design">IBM Design</SwitcherLink>
      <SwitcherLink href="https://ibm.com/design/language">
        IBM Design Language
      </SwitcherLink>
      <SwitcherLink href="https://ibm.com/brand">IBM Brand Center</SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/able/">
        IBM Accessibility
      </SwitcherLink>
      <SwitcherDivider>Design disciplines</SwitcherDivider>
      <SwitcherLink href="https://www.carbondesignsystem.com/">
        Product
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/standards/web/">
        Digital
      </SwitcherLink>
      <SwitcherLink {...eventProps}>Event</SwitcherLink>
      <SwitcherLink disabled>Workplace</SwitcherLink>
      <SwitcherDivider>Design practices</SwitcherDivider>
      <SwitcherLink href="https://www.ibm.com/design/thinking/">
        Enterprise Design Thinking
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/research/">
        IBM Design Research
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/design/ai">
        IBM Design for AI
      </SwitcherLink>
      <SwitcherLink href="https://www.ibm.com/services/ibmix/">
        IBM iX
      </SwitcherLink>
    </>
  );
};

Switcher.defaultProps = {
  children: <DefaultChildren />,
};

export default Switcher;
