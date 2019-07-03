import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { link } from './EditLink.module.scss';

const repository = 'https://github.com/temporary/master/tree';

const rowCss = css({
  position: 'relative',
  bottom: 'calc(-160px + 0.875rem + 32px)',
});

export default class EditLink extends React.Component {
  render() {
    const { repositoryUrl, slug, fileType } = this.props;
    const href = `${repositoryUrl}tree/master/src/content${slug}.${fileType}`;

    return (
      <div css={rowCss} className="bx--row">
        <div className="bx--col">
          <a className={link} href={href}>
            Edit this page on GitHub
          </a>
        </div>
      </div>
    );
  }
}

EditLink.propTypes = {
  repositoryUrl: PropTypes.string,
  fileType: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

EditLink.defaultProps = {
  repositoryUrl: repository.url,
  fileType: 'mdx',
};
