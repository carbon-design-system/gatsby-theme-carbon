import { useEffect, useContext } from 'react';
import NavContext from '../context/NavContext';

const useNavScroll = (sideNavRef) => {
  const { updateNavScrollOffset } = useContext(NavContext);

  useEffect(() => {
    // const sideNav = document.querySelector('ul.bx--side-nav__items');
    const sideNav = sideNavRef.current.querySelector('ul.sidenav-list');

    return () => {
      updateNavScrollOffset(sideNav.scrollTop, 'update-nav-scroll');
    };
  }, []);
};

export default useNavScroll;
