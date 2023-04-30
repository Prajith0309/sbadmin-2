import React from 'react';

function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={handleScrollToTop}><i class="fas fa-angle-up"></i></button>
  );
}

export default ScrollToTopButton;