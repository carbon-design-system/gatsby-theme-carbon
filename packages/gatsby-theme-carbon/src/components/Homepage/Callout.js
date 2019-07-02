import React from 'react';
import styled from '@emotion/styled';
import { Grid, Row, Column } from '../Grid';
import mq from '../../util/media-queries';

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
`;

const StyledRow = styled(Row)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: ${props => props.theme.layout[4]};
  padding-bottom: ${props => props.theme.layout[4]};
  max-width: 74.25rem;
  flex-direction: column;
  ${mq.md} {
    flex-direction: row;
  }
`;

const HomepageCallout = ({ leftText, rightText, ...rest }) => (
  <StyledGrid {...rest}>
    <StyledRow>
      <Column colLg={4} colMd={4} className="bx--type-expressive-heading-03">
        {leftText()}
      </Column>
      <Column colLg={8} colMd={4} className="bx--type-expressive-paragraph-01">
        {rightText()}
      </Column>
    </StyledRow>
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
