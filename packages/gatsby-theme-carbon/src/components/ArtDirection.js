import React from 'react';
import useMedia from 'use-media';
import { breakpoints } from '@carbon/elements';
import PropTypes from 'prop-types';

const ArtDirection = ({ children }) => {
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });
  const isTablet = useMedia({ maxWidth: breakpoints.lg.width });

  const childrenArray = React.Children.toArray(children);

  if (isMobile || !childrenArray[1]) {
    return childrenArray[0];
  }

  if (isTablet || !childrenArray[2]) {
    return childrenArray[1];
  }

  return childrenArray[2];
};

ArtDirection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ArtDirection;
