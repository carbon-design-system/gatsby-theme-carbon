import { useEffect, useRef, useState } from 'react';
import useScrollPosition from './useScrollPosition';
import useWindowSize from './useWindowSize';

const useScrollDirection = () => {
  const { y } = useScrollPosition();
  const lastPosition = useRef(y);
  const [direction, setDirection] = useState(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    const pastPageHeader = y > 290;
    const scrollingDown = lastPosition.current && y >= lastPosition.current;
    if (pastPageHeader && scrollingDown) {
      setDirection('down');
    } else {
      setDirection('up');
    }
    lastPosition.current = y;
  }, [windowSize.innerWidth, y]);

  return direction;
};

export default useScrollDirection;
