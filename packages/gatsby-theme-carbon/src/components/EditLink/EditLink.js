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
            url
            subDirectory
            branch
          }
        }
      }
    }
  `);

  // prefer `url` over deprecated `baseUrl` property

  const { url, subDirectory, branch } = repositoryProp
    ? { url: repositoryProp.url || repositoryProp.baseUrl, ...repositoryProp }
    : repository;

  const href = `${url}/edit/${branch}${subDirectory}/src/pages${relativePagePath}`;

  return url ? (
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
    // `baseUrl` is deprecated; use `url` instead
    baseUrl: PropTypes.string,
    url: PropTypes.string,
    subDirectory: PropTypes.string,
    branch: PropTypes.string,
  }),
  relativePagePath: PropTypes.string,
};

export default EditLink;
