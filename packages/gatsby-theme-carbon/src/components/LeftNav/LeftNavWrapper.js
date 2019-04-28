import styled from '@emotion/styled';

const LeftNavWrapper = styled.div(({ expanded }) => ({
  width: '224px',
  transition: 'transform 0.4s ease',
  height: '100vh',
  position: 'fixed',
  left: 0,
  zIndex: 8000,
  transform: expanded ? 'translateX(0px)' : 'translateX(-225px)',
  '.bx--side-nav__footer': {
    display: 'none',
  },
}));

export default LeftNavWrapper;
