import React from 'react';
import styled from '@emotion/styled';
import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';

const textCss = ({ typeStyles }) => [typeStyles.bodyLong02, responsiveStyles];

const List = styled.ul`
  list-style: none;
  margin-top: 0;
  margin-bottom: 1.5rem;

  li {
    margin-left: 1.25rem;
    a {
      color: ${props => props.theme.colors.white};
    }
    & :before {
      content: '–';
      position: absolute;
      margin-left: -1.25rem;
    }
    & p {
      display: inline;
    }
  }
`;

const UnorderedList = ({ children, ...rest }) => (
  <List css={textCss} {...rest}>
    {children}
  </List>
);

export default UnorderedList;
