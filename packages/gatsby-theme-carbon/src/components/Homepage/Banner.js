import React from 'react';
import styled from '@emotion/styled';
import { Grid, Row, Column } from '../Grid';

import { column, row, grid } from './Banner.module.scss';

const StyledGrid = styled(Grid)`
  max-width: 100%;
  background-image: url(${props => props.image});
  background-position: ${props => (props.position ? props.position : 'center')};
`;

const HomepageBanner = ({ image, position, renderText }) => (
  <StyledGrid className={grid} position={position} image={image}>
    <Row className={row}>
      <Column className={column}>{renderText()}</Column>
    </Row>
  </StyledGrid>
);

export default HomepageBanner;
