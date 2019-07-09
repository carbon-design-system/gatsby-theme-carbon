import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    <span>Gatsby theme</span>&nbsp;Carbon
  </Header>
);

export default CustomHeader;
