import styled from '@emotion/styled';
import mq from '../../util/media-queries';

const LeftNavWrapper = styled.div(({ expanded }) => ({
  width: '224px',
  transition: 'transform 0.3s ease',
  height: '100vh',
  position: 'fixed',
  left: 0,
  zIndex: 8000,
  transform: expanded ? 'translateX(0px)' : 'translateX(-47px)',
  '.bx--side-nav__footer': {
    display: 'none',
  },
}));

export default LeftNavWrapper;
