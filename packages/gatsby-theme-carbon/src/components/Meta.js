import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from '../util/hooks';

const Meta = ({ pageTitle, pageDescription, pageKeywords, titleType }) => {
  const { title, description, keywords } = useMetadata();

  const getPageTitle = () => {
    switch (titleType) {
      case 'page':
        // use site title for fallback
        return pageTitle || title;
      case 'site':
        return title;
      case 'append':
        return `${title}${pageTitle ? ` – ${pageTitle}` : ''}`;
      case 'prepend':
        return `${pageTitle ? `${pageTitle} – ` : ''}${title}`;
      default:
        return null;
    }
  };

  return (
    <Helmet
      title={getPageTitle()}
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
