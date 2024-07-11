import React from 'react';
import './ClothingCollection.css'; // Import the CSS file

// Correctly import the images
import productImage1 from './assets/файлы/фотки/фото товара01.png';
import productImage2 from './assets/файлы/фотки/фото товара02.png';
import productImage3 from './assets/файлы/фотки/фото товара03.png';
import favoriteIcon from './assets/файлы/векторы/избранное.svg';

const CollectionComponent = () => {
    return (
        
        <div className="collection-component">
            <h2>джемперы и кардиганы</h2>
            <div className="collection-items">
                <div className="collection-item">
                    <img src={productImage1} alt="Льняная рубашка оверсют" className="item-image" />
                    <div className="item-info">
                        <p className="item-name">Льняная рубашка оверсют</p>
                        <img src={favoriteIcon} alt="Favorite" className="favorite-icon" />
                    </div>
                    <p className="item-price">4 599</p>
                </div>
                <div className="collection-item">
                    <img src={productImage2} alt="Льняная рубашка оверсют" className="item-image" />
                    <div className="item-info">
                        <p className="item-name">Льняная рубашка оверсют</p>
                        <img src={favoriteIcon} alt="Favorite" className="favorite-icon" />
                    </div>
                    <p className="item-price">4 599</p>
                </div>
                <div className="collection-item">
                    <img src={productImage3} alt="Льняная рубашка оверсют" className="item-image" />
                    <div className="item-info">
                        <p className="item-name">Льняная рубашка оверсют</p>
                        <img src={favoriteIcon} alt="Favorite" className="favorite-icon" />
                    </div>
                    <p className="item-price">4 599</p>
                </div>
            </div>
            <div className="button-container">
                <button className="collection-button">| ПЕРЕЙТИ К КОЛЛЕКЦИИ |</button>
            </div>
        </div>
    );
};

export default CollectionComponent;
