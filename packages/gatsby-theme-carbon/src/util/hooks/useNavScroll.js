import { useEffect, useContext } from 'react';
import NavContext from '../context/NavContext';

const useNavScroll = (sideNavRef) => {
  const { updateNavScrollOffset } = useContext(NavContext);

  useEffect(() => {
    const sideNav = sideNavRef.current.querySelector('ul.sidenav-list');

    return () => {
      updateNavScrollOffset(sideNav.scrollTop, 'update-nav-scroll');
    };
  }, []); // empty array throws lint warning, but without it the sidenav scroll starts glitching
};

export default useNavScroll;
