'use client';

import { useState, useEffect } from 'react';

export default function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(true);

  const scrollHandler = () => {
    window.pageYOffset > 50 ? setIsVisible(false) : setIsVisible(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-secondary text-white p-2 z-40 rounded-full lg:hidden"
    >
      Scroll down
    </button>
  ) : null;
}
