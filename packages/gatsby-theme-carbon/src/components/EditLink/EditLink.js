import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { link, row } from './EditLink.module.scss';
import usePrefix from '../../util/hooks/usePrefix';

const prefix = usePrefix();

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
    <div className={`${prefix}--row ${row}`}>
      <div className={`${prefix}--col`}>
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
