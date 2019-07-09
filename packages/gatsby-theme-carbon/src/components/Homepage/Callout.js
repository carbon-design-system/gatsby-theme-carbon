import React from 'react';
import styled from '@emotion/styled';
import { Grid, Column, Row } from '../Grid';

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
  width: 100%;
  max-width: 100%;
`;

const HomepageCallout = ({ leftText, rightText, ...rest }) => (
  <StyledGrid className={grid} {...rest}>
    <Row className={row}>
      <Column colLg={4} colMd={4} className={firstColumn}>
        {leftText()}
      </Column>
      <Column colLg={8} colMd={4} className={secondColumn}>
        {rightText()}
      </Column>
    </Row>
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
