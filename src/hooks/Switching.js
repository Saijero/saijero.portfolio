import { useState, useEffect, useCallback } from 'react';

function Switching(items, initialIndex = 0, delay = 5000) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const moveToNextItem = useCallback(() => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, items]);

  useEffect(() => {
    const timer = setTimeout(moveToNextItem, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, delay, moveToNextItem]);

  return { currentItem: items[currentIndex], moveToNextItem };
}

export default Switching;
