import React from 'react';
import './RecommendedProducts.css';
import productImage1 from './assets/файлы/фотки/фото товара01.png'; // Ensure the correct path
import productImage2 from './assets/файлы/фотки/фото товара02.png'; // Ensure the correct path
import productImage3 from './assets/файлы/фотки/фото товара03.png'; // Ensure the correct path
import productImage4 from './assets/файлы/фотки/фото товара04.png'; // Ensure the correct path
import favoriteIcon from './assets/файлы/векторы/избранное.svg'; // Ensure the correct path

const items = [
    { title: 'Льняная рубашка оверсют', price: '4 599', imgSrc: productImage1 },
    { title: 'Рубашка relax ft', price: '3 599', imgSrc: productImage2 },
    { title: 'Льняные брюки', price: '3 799', imgSrc: productImage3 },
    { title: 'Футболка оверсайз', price: '2 599', imgSrc: productImage4 },
];

const RecommendedProducts = () => {
    return (
        <div className="recommended-products">
            <h2>вам может понравится</h2>
            <div className="products-grid">
                {items.map((item, index) => (
                    <div key={index} className="product-card">
                        <img src={item.imgSrc} alt={item.title} className="product-image" />
                        <div className="product-info">
                            <p className="product-name">{item.title}</p>
                            <img src={favoriteIcon} alt="Favorite" className="favorite-icon" />
                        </div>
                        <p className="product-price">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendedProducts;
