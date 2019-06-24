import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  { title: 'Resources', href: '/resources' },
  { title: 'Storybook', href: 'https://react.carbondesignsystem.com' },
];

// newTab: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks newTab links={links} />;

export default CustomResources;
