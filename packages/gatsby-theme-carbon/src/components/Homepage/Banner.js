import React from 'react';
import styled from '@emotion/styled';
import { Grid, Row, Column } from '../Grid';
import mq from '../../util/media-queries';

const StyledGrid = styled(Grid)`
  background-size: cover;
  background-image: url(${props => props.image});
  height: 50vh;
  max-height: 560px;
  width: 100%;
  background-position: ${props => (props.position ? props.position : 'center')};
  ${mq.lg} {
    padding-left: 256px;
  }
`;

const StyledRow = styled(Row)`
  height: 100%;
  h1 {
    padding: 2rem 0;
  }
`;

const StyledColumn = styled(Column)`
  color: ${props => props.theme.colors.inverse01};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const columCss = ({ typeStyles }) => typeStyles.quotation01;

const HomepageBanner = ({ image, position, renderText }) => (
  <StyledGrid position={position} image={image}>
    <StyledRow>
      <StyledColumn css={columCss}>{renderText()}</StyledColumn>
    </StyledRow>
  </StyledGrid>
);

export default HomepageBanner;
