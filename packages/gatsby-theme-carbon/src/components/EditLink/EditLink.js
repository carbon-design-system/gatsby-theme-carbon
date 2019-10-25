import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { link, row } from './EditLink.module.scss';

const EditLink = ({ relativePagePath, repository: repositoryProp }) => {
  const {
    site: {
      siteMetadata: { repository },
    },
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
    }
  `);

  const { baseUrl, subDirectory, branch } = repositoryProp || repository;

  const href = `${baseUrl}/edit/${branch}${subDirectory}/src/pages${relativePagePath}`;

  return baseUrl ? (
    <div className={`bx--row ${row}`}>
      <div className="bx--col">
        <a className={link} href={href}>
          Edit this page on GitHub
        </a>
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
