import { graphql, useStaticQuery } from 'gatsby';

const useMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          isSearchEnabled
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useMetadata;
