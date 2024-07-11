import React from 'react';
import './ImageGrid.css';
import sportImage from './assets/файлы/фотки/спорт.png';
import schoolImage from './assets/файлы/фотки/школа.png';
import beachImage from './assets/файлы/фотки/пляж.png';
import accessoriesImage from './assets/файлы//фотки/аксы.png';

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <div className="image-item">
        <img src={sportImage} alt="Спорт" />
        <div className="overlay">СПОРТ</div>
      </div>
      <div className="image-item">
        <img src={schoolImage} alt="Школа" />
        <div className="overlay">ШКОЛА</div>
      </div>
      <div className="image-item">
        <img src={beachImage} alt="Для пляжа" />
        <div className="overlay">ДЛЯ ПЛЯЖА</div>
      </div>
      <div className="image-item">
        <img src={accessoriesImage} alt="Аксессуары" />
        <div className="overlay">АКСЕССУАРЫ</div>
      </div>
    </div>
  );
};

export default ImageGrid;
