import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  { title: 'Github', href: 'https://github.com' },
  { title: 'Storybook', href: 'https://react.carbondesignsystem.com' },
];

const CustomResources = () => <ResourceLinks links={links} />;

export default CustomResources;
