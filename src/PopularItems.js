import React from 'react';
import './PopularItems.css';
import itemImage1 from './assets/файлы/фотки/фото товара01.png';
import itemImage2 from './assets/файлы/фотки/фото товара02.png';
import itemImage3 from './assets/файлы/фотки/фото товара03.png';
import itemImage4 from './assets/файлы/фотки/фото товара04.png';
import itemImage5 from './assets/файлы/фотки/фото товара05.png';
import itemImage6 from './assets/файлы/фотки/фото товара06.png';
import itemImage7 from './assets/файлы/фотки/фото товара01.png';
import itemImage8 from './assets/файлы/фотки/фото товара02.png';
import favoriteIcon from '/home/dark/Documents/GitHub/Spring-React/src/assets/файлы/векторы/избранное.svg';

const PopularItems = () => {
  const items = [
    { title: 'Платье-рубашка с поясом', price: '3 599', imgSrc: itemImage1 },
    { title: 'Прозрачная блузка', price: '2 999', imgSrc: itemImage2 },
    { title: 'Вязаное платье миди', price: '3 599', imgSrc: itemImage3 },
    { title: 'Базовый топ в рубчик', price: '999', imgSrc: itemImage4 },
    { title: 'Льняная рубашка оверсайз', price: '4 599', imgSrc: itemImage5 },
    { title: 'Рубашка relax fit', price: '3 599', imgSrc: itemImage6 },
    { title: 'Легкие штаны', price: '2 999', imgSrc: itemImage7 },
    { title: 'Оверсайз свитер', price: '2 599', imgSrc: itemImage8 }
  ];

  return (
    <div className="popular-items" style={{ backgroundImage: `url('/home/dark/Documents/GitHub/Spring-React/src/assets/файлы/фотки/фон страницы.png')` }}>
      <h2>популярное</h2>
      <div className="items-grid">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.imgSrc} alt={item.title} />
            <div class="item-popular">
              <div className="item-info">
                <h3>{item.title}</h3>
                <img src={favoriteIcon} alt="Favorite" className="favorite-icon" />
              </div>
              <p>{item.price}</p>

              

            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularItems;
