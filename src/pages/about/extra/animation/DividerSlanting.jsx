import React, { useEffect, useState } from 'react'

const DividerSlanting = () => {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    // This function will toggle the rotation state every 15 seconds
    const toggleRotation = () => {
      setIsRotating((prevIsRotating) => !prevIsRotating);
    };

    // Start the rotation immediately
    toggleRotation();

    // Set an interval to toggle rotation every 15 seconds
    const intervalId = setInterval(toggleRotation, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const numberOfSpans = 35; // Change this to the number of spans you want
  const spanArray = [];

  for (let i = 0; i < numberOfSpans; i++) {

    const animationDelay = i * 0.05;
    const decrease = 1 - animationDelay;
    const decrease_height = 4 - animationDelay;

    spanArray.push(
      <span
        key={i}
        className='wp-slashing'
        style={isRotating ? {
          height: `${decrease_height}px`,
          animation: 'rotate360 1.5s linear',
          animationDelay: `${animationDelay}s`,
          background: `rgb(0, 255, 208, ${decrease})`,
          boxShadow: `0 0 ${decrease_height}px var(--64CCC56B)`,
        } : { animation: '' }}
      >
      </span>
    );
  }

  return (
    <React.Fragment>
      <div className='wp-animate-wrap'>
        {spanArray}
      </div>
    </React.Fragment>
  )
}

export default DividerSlanting