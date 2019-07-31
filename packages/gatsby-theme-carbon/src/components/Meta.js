import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from '../util/hooks';

const Meta = ({ pageTitle, pageDescription, pageKeywords }) => {
  const { title, description, keywords } = useMetadata();
  return (
    <Helmet
      title={pageTitle ? `${title} - ${pageTitle}` : title}
      meta={[
        {
          name: 'description',
          content: pageDescription || description,
        },
        {
          name: 'keywords',
          content: pageKeywords || keywords,
        },
      ]}
    />
  );
};

export default Meta;
