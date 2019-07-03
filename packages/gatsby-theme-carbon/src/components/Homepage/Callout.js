import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '../Grid';

import { grid, row, firstColumn, secondColumn } from './Callout.module.scss';

const StyledGrid = styled(Grid)`
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] ||
    props.backgroundColor ||
    props.theme.colors.interactive02};
  color: ${props =>
    props.theme.colors[props.color] ||
    props.color ||
    props.theme.colors.inverse01}};
`;

const HomepageCallout = ({ leftText, rightText, ...rest }) => (
  <StyledGrid className={grid} {...rest}>
    <section className={row}>
      <div className={firstColumn}>{leftText()}</div>
      <div className={secondColumn}>{rightText()}</div>
    </section>
  </StyledGrid>
);

HomepageCallout.defaultProps = {
  leftText: function renderLeftText() {
    return (
      <>
        Think → <strong>Guide</strong>
      </>
    );
  },
  rightText: function renderRightText() {
    return (
      <p>
        <strong>Build Bonds.</strong>
        <br />
        This is the guiding ethos behind IBM’s design philosophy and principles.
        This helps us distinguish every element and every experience Designed by
        IBM.
      </p>
    );
  },
};

export default HomepageCallout;
