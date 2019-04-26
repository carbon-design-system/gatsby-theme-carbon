import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const repository = 'https://github.com/temporary/master/tree';

const rowCss = css({
  position: 'relative',
  bottom: 'calc(-160px + 0.875rem + 32px)',
});

const aCss = ({ typeStyles, colors }) => ({
  ...typeStyles.bodyShort01,
  color: colors.text02,
  transition: '.11s',
  ':hover': {
    color: colors.text01,
  },
});

export default class EditLink extends React.Component {
  render() {
    const { repositoryUrl, slug, fileType } = this.props;
    const href = `${repositoryUrl}tree/master/src/content${slug}.${fileType}`;

    return (
      <div css={rowCss} className="bx--row">
        <div className="bx--offset-lg-4 bx--col">
          <a css={aCss} href={href}>
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
