import React from 'react';
import styled from '@emotion/styled';
import Row from './markdown/Row';

const P = styled.p`
  ${props => props.theme.typeStyles.expressiveHeading03}
  margin-bottom: ${props => props.theme.layout[2]};
  &:empty: {
    padding: 0;
    margin: 0;
  }
`;

const PageDescription = ({ children }) => (
  <Row type="p">
    <P>{children}</P>
  </Row>
);

export default PageDescription;
