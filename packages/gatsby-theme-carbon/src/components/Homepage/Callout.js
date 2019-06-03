import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '../Grid';
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

const StyledRow = styled.section`
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

const firstColumn = ({ typeStyles, layout }) => [
  typeStyles.expressiveHeading03,
  {
    padding: '0 1rem',
    paddingLeft: 0,
    paddingBottom: layout[2],
    width: '100%',
    fontSize: 'calc(1.25rem + 0*(100vw - 20rem)/62)',
    [mq.md]: {
      width: '33%',
    },
    [mq.max]: {
      fontSize: '1.5rem',
    },
  },
];

const secondColumn = ({ typeStyles }) => [
  typeStyles.expressiveParagraph01,
  {
    padding: '0 1rem',
    fontSize: 'calc(1.75rem + 0.25*(100vw - 66rem)/33)',
    width: '100%',
    paddingLeft: 0,
    [mq.md]: {
      width: '66%',
    },
    [mq.max]: {
      fontSize: '2rem',
    },
  },
];

const HomepageCallout = ({ leftText, rightText, ...rest }) => (
  <StyledGrid {...rest}>
    <StyledRow>
      <div css={firstColumn}>{leftText()}</div>
      <div css={secondColumn}>{rightText()}</div>
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
