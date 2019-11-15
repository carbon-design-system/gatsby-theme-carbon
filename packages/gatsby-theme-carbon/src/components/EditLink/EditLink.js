import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { link, row, text } from './EditLink.module.scss';

const EditLink = ({
  relativePagePath,
  repository: repositoryProp,
  fileAbsolutePath: currentPageAbsolutePath,
}) => {
  const {
    site: {
      siteMetadata: { repository },
    },
    allMdx,
  } = useStaticQuery(graphql`
    query REPOSITORY_QUERY {
      site {
        siteMetadata {
          repository {
            baseUrl
            subDirectory
            branch
          }
        }
      }
      allMdx {
        edges {
          node {
            parent {
              ... on File {
                mtime(formatString: "MMMM Do, YYYY")
              }
            }
            fileAbsolutePath
          }
        }
      }
    }
  `);

  const { baseUrl, subDirectory, branch } = repositoryProp || repository;

  const href = `${baseUrl}/edit/${branch}${subDirectory}/src/pages${relativePagePath}`;

  // Mapping the node of every MDX file with it's fileAbsolutePath and mtime (modified time)
  const allMdxNodes = allMdx.edges.map(({ node }) => node);

  // Compares the fileAbsolutePath against the current page that is being created and stores the modified time of the matched page in a const.
  const {
    parent: { mtime },
  } = allMdxNodes.find(
    ({ fileAbsolutePath }) => fileAbsolutePath === currentPageAbsolutePath
  );

  return baseUrl ? (
    <div className={`bx--row ${row}`}>
      <div className="bx--col">
        <a className={link} href={href}>
          Edit this page on GitHub
        </a>
        <p className={text}>Last updated on {mtime}</p>
      </div>
    </div>
  ) : null;
};

EditLink.propTypes = {
  repository: PropTypes.shape({
    baseUrl: PropTypes.string,
    subDirectory: PropTypes.string,
    branch: PropTypes.string,
  }),
  relativePagePath: PropTypes.string,
};

export default EditLink;
