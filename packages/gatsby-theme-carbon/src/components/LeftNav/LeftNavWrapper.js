import styled from '@emotion/styled';
import mq from '../../util/media-queries';

const LeftNavWrapper = styled.div(({ expanded }) => ({
  transition: 'transform 0.15s cubic-bezier(0.2, 0.2, 0.38, 0.9)',
  height: '100vh',
  width: '256px',
  position: 'fixed',
  left: 0,
  zIndex: 8000,
  transform: expanded ? 'translateX(0px)' : 'translateX(-256px)',
  [mq.lg]: {
    '.bx--side-nav.bx--side-nav--website': {
      boxShadow: 'none',
    },
  },
  '.bx--side-nav__link--current': {
    backgroundColor: '#e5e5e5',
  },
}));

export default LeftNavWrapper;
