import styled from '@emotion/styled';
import mq from '../../util/media-queries';

const LeftNavWrapper = styled.div(({ expanded, shouldHideHeader }) => ({
  transition: 'transform 0.15s cubic-bezier(0.2, 0.2, 0.38, 0.9), top 110ms',
  width: '256px',
  position: 'fixed',
  top: shouldHideHeader ? '0px' : '48px',
  bottom: 0,
  overflow: 'auto',
  scrollbarWidth: 'none',
  zIndex: 10000, // z('floating')
  transform: expanded ? 'translateX(0px)' : 'translateX(-256px)',
  '.bx--side-nav.bx--side-nav--website': {
    boxShadow: expanded ? '0 2px 8px rgba(0, 0, 0, 0.2)' : 'none',
  },
  [mq.lg]: {
    transform: 'translateX(0px)',
    '.bx--side-nav.bx--side-nav--website': {
      boxShadow: 'none',
    },
  },
  '.bx--side-nav__link--current': {
    backgroundColor: '#e5e5e5',
  },
}));

export default LeftNavWrapper;
