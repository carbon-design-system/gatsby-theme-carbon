import mediaqueries from '../../util/media-queries';

const responsiveStyles = {
  width: '100%',
  padding: '0 1rem',
  [mediaqueries.md]: {
    width: '75%',
  },
  [mediaqueries.lg]: {
    width: '58.33%',
  },
};

export default responsiveStyles;
