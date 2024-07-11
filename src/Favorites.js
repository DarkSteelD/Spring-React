import React, { useState } from 'react';
import './Favorites.css';
import productImage1 from './assets/файлы/фотки/фото товара01.png'; // Ensure the correct path
import productImage2 from './assets/файлы/фотки/фото товара02.png'; // Ensure the correct path
import productImage3 from './assets/файлы/фотки/фото товара03.png'; // Ensure the correct path
import cartIcon from './assets/файлы/векторы/мусорка.svg'; // Ensure the correct path
import deleteIcon from './assets/файлы/векторы/мусорка.svg'; // Ensure the correct path

const Favorites = () => {
    const [favorites, setFavorites] = useState([
        { id: 1, title: 'Льняная рубашка оверсют', price: 4599, size: '46', imgSrc: productImage1 },
        { id: 2, title: 'Льняная рубашка оверсют', price: 4599, size: '46', imgSrc: productImage2 },
        { id: 3, title: 'Льняная рубашка оверсют', price: 4599, size: '46', imgSrc: productImage3 },
    ]);

    const handleRemoveFavorite = id => {
        setFavorites(favorites.filter(item => item.id !== id));
    };

    return (
        <div className="favorites-page">
            <div className="favorites-header">
                <h2>избранное</h2>
                <span>{favorites.length} товара</span>
            </div>
            <div className="favorites-items">
                {favorites.map(item => (
                    <div key={item.id} className="favorite-item">
                        <img src={item.imgSrc} alt={item.title} className="item-image" />
                        <div className="item-details">
                            <h3>{item.title}</h3>
                            <div className="item-info">
                                <span>S {item.size}</span>
                                <div className="item-actions">
                                    <button className="add-to-cart">В КОРЗИНУ</button>
                                    <img src={cartIcon} alt="cart" />
                                    <img src={deleteIcon} alt="delete" onClick={() => handleRemoveFavorite(item.id)} />
                                </div>
                            </div>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
