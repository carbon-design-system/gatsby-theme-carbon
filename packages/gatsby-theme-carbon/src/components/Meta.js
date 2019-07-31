import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from '../util/hooks';

const Meta = ({ title: pageTitle }) => {
  const { title, description, keywords } = useMetadata();
  return (
    <Helmet
      title={pageTitle ? `${title} - ${pageTitle}` : title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
        },
      ]}
    />
  );
};

export default Meta;
