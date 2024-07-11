import React from 'react';
import backgroundImage from './assets/файлы/фотки/пляж.png';//'./assets/файлы/фотки/фон подвал.png';//'./assets/файлы/фотки/фон страницы.png'; // Correct import of the image
import MainMenuImg from './assets/Main.png'; // Background for the menu

const TestImage = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`, // Use the imported image variable here
      backgroundSize: 'cover',
      backgroundPosition: 'center' // Ensure the image is centered
    }}>
      Background Test
    </div>
  );
};

export default TestImage;
