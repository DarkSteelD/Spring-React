import React, { useState } from 'react';
import './ProductDetails.css';
import mainImage from './assets/файлы/фотки/фото товара01.png'; // Update with the correct path
import thumb1 from './assets/файлы/фотки/фото товара02.png'; // Update with the correct path
import thumb2 from './assets/файлы/фотки/фото товара03.png'; // Update with the correct path
import thumb3 from './assets/файлы/фотки/фото товара04.png'; // Update with the correct path
import favoriteIcon from './assets/файлы/векторы/избранное.svg'; // Update with the correct path
import starIcon from './assets/Vector.png'; // Update with the correct path
import ratingImage1 from './assets/файлы/фотки/фото товара05.png'; // Update with the correct path
import ratingImage2 from './assets/файлы/фотки/фото товара06.png'; // Update with the correct path
import sizeIcon from './assets/Vector.png'; // Update with the correct path

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('S');

  const sizes = [
    { label: 'S', value: '46' },
    { label: 'M', value: '48' },
    { label: 'L', value: '50' },
    { label: 'XL', value: '52' },
    { label: '2XL', value: '54' }
  ];

  return (
    <div className="product-details">
      <div className="image-section">
        <img src={mainImage} alt="Main product" className="main-image" />
        <div className="thumbnails-wrapper">
          <div className="thumbnail-images">
            <img src={thumb1} alt="Thumbnail 1" />
            <img src={thumb2} alt="Thumbnail 2" />
            <img src={thumb3} alt="Thumbnail 3" />
          </div>
        </div>
      </div>
      <div className="details-section">
        <div className="rating-section">
          <h1>Льняная рубашка оверсют</h1>
          <img src={favoriteIcon} alt="Favorite" className="favorite-icon" />
        </div>
        <p className="price">4 599</p>
        <div className="size-options">
          <span>Размер</span>
          <div className="sizes">
            {sizes.map(size => (
              <div
                key={size.label}
                className={`size ${selectedSize === size.label ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size.label)}
              >
                <img src={sizeIcon} alt="Size Icon" />
                <p className="label">{size.label}</p>
                <p className="number">{size.value}</p>
              </div>
            ))}
          </div>
        </div>
        <h3 className="title">О товаре:</h3>
        <div className="product-description">
          <p>Артикул: 4225260360-205</p>
          <p>Состав: 75% хлопок, 25% лен</p>
          <p>Страна-производитель: ИНДИЯ</p>
          <p>Уход: Бережная стирка при максимальной температуре 30С, Не отбеливать, Машинная сушка запрещена, Глажка при 110С, Профессиональная сухая чистка, Мягкий режим.</p>
          <p>Параметры: Вырез горловины: округлый; отложной воротничок; Тип рукава: длинные</p>
        </div>
        <div className="buy-section">
          <div className="ratings">
            <span className="star">★</span>
            <div className="rating-info">
              <span className="rating-score">4.9</span>
              <span className="rating-count">237 оценок</span>
            </div>
          </div>
          <div className="review-summary">
            <div className="review-item">
              <img src={ratingImage1} alt="Review 1" />
            </div>
            <div className="review-item">
              <img src={ratingImage2} alt="Review 2" />
            </div>
            <div className="review-item">
              <img src={ratingImage2} alt="Review 2" />
            </div>
          </div>
          <div className="ratings">
            <span className="question">?</span>
            <div className="rating-info">
              <span className="rating-score">10</span>
              <span className="rating-count">вопросов</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
