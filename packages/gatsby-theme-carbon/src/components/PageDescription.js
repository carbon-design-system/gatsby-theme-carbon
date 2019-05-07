import styled from '@emotion/styled';
import responsiveStyles from './shared/responsiveStyles';

const PageDescription = styled.p(({ theme }) => [
  theme.typeStyles.expressiveHeading03,
  responsiveStyles,
  {
    marginBottom: theme.layout[2],
  },
]);

export default PageDescription;
