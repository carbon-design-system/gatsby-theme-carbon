import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from '../util/hooks';

const Meta = () => {
  const siteMetadata = useMetadata();
  return (
    <Helmet
      title={siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.',
        },
        {
          name: 'keywords',
          content:
            'IBM, design, system, Carbon, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud',
        },
      ]}
    />
  );
};

export default Meta;
