import React from 'react';
import styled from '@emotion/styled';
import Row from './Row';
import mq from '../util/media-queries';

const Ul = styled.ul`
  column-count: 1;
  list-style: none;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0;
  padding-left: 1rem;
  ${mq.md}: {
    column-count: ${props => (props.splitColumns ? 2 : 1)};
    padding-left: 2rem;
    line-height: 1.625rem;
    margin-bottom: 0;
  },
`;

// const liCss = css``;

const Li = styled.li`
  padding-bottom: 0.5rem;
  ${props => props.theme.typeStyles.expressiveHeading03}
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text01};
    &:hover {
      color: ${props => props.theme.colors.interactive01};
    }
    &::before {
      content: '\\21B3';
      margin-left: 0rem;
      margin-right: 0.25rem;
    }
  }
`;

const WrappedAnchorLinks = ({ children }) => (
  <Row>
    <Ul splitColumns>
      {children.map((child, i) => (
        <Li key={i}>{child}</Li>
      ))}
    </Ul>
  </Row>
);

export default WrappedAnchorLinks;
