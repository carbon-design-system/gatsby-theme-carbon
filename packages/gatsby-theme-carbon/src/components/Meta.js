import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from '../util/hooks';

const Meta = () => {
  const { title, description, keywords } = useMetadata();
  return (
    <Helmet
      title={title}
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
