import { graphql, useStaticQuery } from 'gatsby';

const usePathprefix = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        pathPrefix
      }
    }
  `);

  return data.site.pathPrefix;
};

export default usePathprefix;
