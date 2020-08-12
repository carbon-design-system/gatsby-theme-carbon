import React, { useState, useLayoutEffect } from 'react';
import cx from 'classnames';
import { HeaderGlobalAction, Slider } from 'carbon-components-react';
import { AccessibilityAlt20 } from '@carbon/icons-react';

import {
  switcherButtonOpen,
  headerButton,
  switcherButton,
  a11yMenu,
  label,
  labelSizeMin,
  labelSizeMax,
} from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [size, setSize] = useState(1);
  const [weight, setWeight] = useState(400);
  const [stretch, setStretch] = useState(100);

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      'style',
      `--cds-font-size: ${Number.parseFloat(size).toPrecision(2)}rem;
         --cds-font-weight: ${weight};
         --cds-font-stretch: ${stretch}%;`
    );
  }, [size, stretch, weight]);

  return (
    <>
      <HeaderGlobalAction
        className={cx(headerButton, switcherButton, {
          [switcherButtonOpen]: menuOpen,
        })}
        aria-label="Switch"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
        <AccessibilityAlt20 />
      </HeaderGlobalAction>
      <div hidden={!menuOpen} className={a11yMenu}>
        <Slider
          onChange={({ value }) => setSize(value)}
          minLabel={() => (
            <span
              style={{ fontSize: '0.7rem' }}
              className={cx(label, labelSizeMin)}>
              A
            </span>
          )}
          maxLabel={() => (
            <span
              style={{ fontSize: '1.5rem' }}
              className={cx(label, labelSizeMax)}>
              A
            </span>
          )}
          hideTextInput
          light
          value={1}
          min={0.7}
          max={1.3}
          step={0.1}
          labelText="Font size"
        />
        <Slider
          onChange={({ value }) => setWeight(value)}
          minLabel={() => (
            <span style={{ fontWeight: 100 }} className={label}>
              A
            </span>
          )}
          maxLabel={() => (
            <span style={{ fontWeight: 700 }} className={label}>
              A
            </span>
          )}
          hideTextInput
          light
          value={400}
          min={100}
          max={700}
          labelText="Font weight"
        />
        <Slider
          onChange={({ value }) => setStretch(value)}
          minLabel={() => (
            <span style={{ fontStretch: '85%' }} className={label}>
              Aa
            </span>
          )}
          maxLabel={() => (
            <span style={{ fontStretch: '100%' }} className={label}>
              Aa
            </span>
          )}
          hideTextInput
          light
          value={100}
          min={85}
          max={100}
          labelText="Font stretch"
        />
      </div>
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
