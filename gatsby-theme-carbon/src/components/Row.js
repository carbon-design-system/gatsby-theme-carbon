import React from 'react';
import PropTypes from 'prop-types';
import { ClassNames } from '@emotion/core';

const Row = ({ children, type, className }) => (
  <ClassNames>
    {({ cx }) => (
      <div
        css={({ spacing }) => ({
          padding: `0 ${spacing[5]}`,
        })}
        className={cx('bx--row', className)}
      >
        <div
          className={cx(
            'bx--col-lg-7',
            'bx--offset-lg-4',
            type === 'p' && 'bx--col-md-6'
          )}
        >
          {children}
        </div>
      </div>
    )}
  </ClassNames>
);

Row.defaultProps = {
  type: 'node',
};

Row.propTypes = {
  // eslint-disable-next-line react/no-typos
  type: PropTypes.elementType,
};

export default Row;
