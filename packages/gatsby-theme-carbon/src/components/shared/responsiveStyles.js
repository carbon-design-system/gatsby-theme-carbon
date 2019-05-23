import mediaqueries from '../../util/media-queries';

const responsiveStyles = {
  width: '100%',
  [mediaqueries.md]: {
    width: '75%',
  },
  [mediaqueries.lg]: {
    width: '58.33%',
  },
};

export default responsiveStyles;
