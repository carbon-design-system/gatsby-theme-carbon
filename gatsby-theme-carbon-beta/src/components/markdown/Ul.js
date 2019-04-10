import React from 'react';
import styled from '@emotion/styled';
import mq from '../MediaQueries';
import Row from './Row';

const textCss = ({ typeStyles }) => ({
  ...typeStyles.bodyLong02,
});

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 1.5rem;

  li {
    margin-left: 1rem;
    a {
      color: ${props => props.theme.colors.white};
    }
    & :before {
      content: '–';
      position: absolute;
      margin-left: -0.5rem;
      transform: translate(-100%, 0px);
    }
    & p {
      display: inline;
    }
    ${mq.md} {
      margin-left: 2rem;
    }
  }
`;

const UnorderedList = ({ children }) => (
  <Row>
    <List className="markdown-ul" css={textCss}>
      {children}
    </List>
  </Row>
);

export default UnorderedList;
