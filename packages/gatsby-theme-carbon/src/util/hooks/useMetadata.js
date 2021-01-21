import { graphql, useStaticQuery } from 'gatsby';

const useMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          keywords
          isSearchEnabled
          homepageTheme
          interiorTheme
          navigationStyle
          lang
          pageModifiedDate
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useMetadata;
