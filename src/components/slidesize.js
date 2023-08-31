import React, { useEffect, useState } from 'react';

export function SlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());

  useEffect(() => {
    // Update slidesPerView when the window is resized
    function handleResize() {
      setSlidesPerView(calculateSlidesPerView());
    }

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to calculate slidesPerView based on screen width
  function calculateSlidesPerView() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 680) {
      return 3; // Large screens
    } else if (windowWidth >= 475) {
      return 2; // Medium screens
    } else {
      return 1; // Small screens
    }
  }
  return slidesPerView

  // Render the component with the calculated slidesPerView

}
