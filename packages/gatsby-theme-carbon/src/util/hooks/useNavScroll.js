import { useEffect, useContext } from 'react';
import NavContext from '../context/NavContext';

const useNavScroll = () => {
  const { updateNavScrollOffset } = useContext(NavContext);

  useEffect(() => {
    const sideNav = document.querySelector('ul.bx--side-nav__items');

    return () => {
      updateNavScrollOffset(sideNav.scrollTop, 'update-nav-scroll');
    };
  }, []);
};

export default useNavScroll;
