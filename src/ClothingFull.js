import React from 'react';
import './ClothingFull.css'; // Import the CSS file
import ClothingCollection from './ClothingCollection';
import FooterComponent from './FooterComponent';
// Correctly import the images
import productImage1 from './assets/файлы/фотки/фото товара01.png';
import productImage2 from './assets/файлы/фотки/фото товара02.png';
import productImage3 from './assets/файлы/фотки/фото товара03.png';
import productImage4 from './assets/файлы/фотки/фото товара04.png';
import productImage5 from './assets/файлы/фотки/фото товара05.png';
import productImage6 from './assets/файлы/фотки/фото товара06.png';
import productImage7 from './assets/файлы/фотки/фото товара01.png';
import productImage8 from './assets/файлы/фотки/фото товара02.png';
import favoriteIcon from './assets/файлы/векторы/избранное.svg';
import PersonIcon from './assets/файлы/векторы/личный каб.svg';
import BucketIcon from './assets/файлы/векторы/мусорка.svg';
import MenuLogo from './assets/файлы/векторы/меню.svg';
import MixiLogo from './assets/mixi-logo.png';
const items = [
    { title: 'Прозрачная блузка', price: '2 999', imgSrc: productImage1 },
    { title: 'Вязаное платье миди', price: '3 599', imgSrc: productImage2 },
    { title: 'Базовый топ в рубчик', price: '999', imgSrc: productImage3 },
    { title: 'Рубашка relax fit', price: '3 599', imgSrc: productImage4 },
    { title: 'Льняные брюки', price: '3 799', imgSrc: productImage5 },
    { title: 'Футболка оверсайз', price: '2 599', imgSrc: productImage6 },
    { title: 'Прозрачная блузка', price: '2 999', imgSrc: productImage7 },
    { title: 'Вязаное платье миди', price: '3 599', imgSrc: productImage8 },
    { title: 'Вязаное платье миди', price: '3 599', imgSrc: productImage8 }
];

const ClothingFull = () => {
    return (
        <div className="clothing-full">
            <div className="menu-container">
                <nav className="navbar">
                    <div className="navbar-top">
                        <div className="left-menu">
                            <img src={MixiLogo} alt="mixi" className="mixi-logo" />
                            <img src={MenuLogo} alt="Menu" className="menu-logo" />
                        </div>
                        <div className="search-container">
                            <input type="text" placeholder="поиск" className="search-bar" />
                        </div>
                        <div className="right-menu">
                            <a href="#">Войти <img src={PersonIcon} alt="Войти" /></a>
                            <a href="#">Корзина <img src={BucketIcon} alt="Корзина" /></a>
                        </div>
                    </div>
                    <ul className="menu">
                        <li><a href="#">одежда</a></li>
                        <li><a href="#">обувь</a></li>
                        <li><a href="#">сумки</a></li>
                        <li><a href="#">нижнее белье</a></li>
                        <li><a href="#">аксессуары</a></li>
                        <li><a href="#">игрушки</a></li>
                    </ul>
                </nav>
            </div>
            <div className="content-wrapped">
                <h2>одежда</h2>
                <div className="wrapper-content">

                    <div className="main-content">
                        <div className="collection-items">
                            {items.map((item, index) => (
                                <div key={index} className="collection-item">
                                    <img src={item.imgSrc} alt={item.title} className="item-image" />
                                    <div className="item-info">
                                        <p className="item-name">{item.title}</p>
                                        <img src={favoriteIcon} alt="Favorite" className="favorite-icon" />
                                    </div>
                                    <p className="item-price">{item.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className="collection-button-container">
                            <button className="collection-button">ПОКАЗАТЬ ЕЩЕ</button>
                        </div>
                    </div>

                    <div className="sidebar">
                        <ul>
                            <li>Мужская</li>
                            <li>Женская</li>
                            <li>Брюки</li>
                            <li>Верхняя одежда</li>
                            <li>Джемперы, кардиганы, свитеры</li>
                            <li>Джинсы</li>
                            <li>Домашняя одежда</li>
                            <li>Комбинезоны</li>
                            <li>Майки</li>
                            <li>Нижнее белье</li>
                            <li>Носки и гетры</li>
                            <li>Рубашки</li>
                            <li>Футболки и поло</li>
                            <li>Худи и свитшоты</li>
                            <li>Шорты</li>
                            <li>Аксессуары</li>
                            <li>Игрушки</li>
                            <li>Электроника</li>
                            <li>Товары для школы</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ClothingCollection />
            <ClothingCollection />
            <ClothingCollection />
            <FooterComponent />
        </div>
    );
};

export default ClothingFull;
