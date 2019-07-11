import React from 'react';
import PropTypes from 'prop-types';

import { link, row } from './EditLink.module.scss';

export default class EditLink extends React.Component {
  render() {
    const {
      repository: { baseUrl, subDirectory },
      slug,
      fileType,
    } = this.props;
    const href = `${baseUrl}/tree/master${subDirectory}/src/pages${slug}.${fileType}`;

    return baseUrl ? (
      <div className={`bx--row ${row}`}>
        <div className="bx--col">
          <a className={link} href={href}>
            Edit this page on GitHub
          </a>
        </div>
      </div>
    ) : null;
  }
}

EditLink.propTypes = {
  repository: PropTypes.shape({
    baseUrl: PropTypes.string,
    subDirectory: PropTypes.string,
  }),
  fileType: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

EditLink.defaultProps = {
  fileType: 'mdx',
};
