import React, { useState } from 'react';

function BackgroundColorChanger() {
  const [bgColor, setBgColor] = useState('white');

  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh' }}>
      <h1>Background Color Changer</h1>
      <button onClick={() => handleButtonClick('yellow')}>Yellow</button>
      <button onClick={() => handleButtonClick('pink')}>Pink</button>
      <button onClick={() => handleButtonClick('orange')}>Orange</button>
    </div>
  );
}

export default BackgroundColorChanger;
