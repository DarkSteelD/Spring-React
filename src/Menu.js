import React from 'react';
import './Menu.css';
import MixiLogo from './assets/mixi-logo.png'; // Ensure the correct path
import MenuLogo from './assets/файлы/векторы/меню.svg'; // Ensure the correct path
import PersonIcon from './assets/файлы/векторы/личный каб.svg'; // Ensure the correct path
import BucketIcon from './assets/файлы/векторы/мусорка.svg'; // Ensure the correct path
import favoriteIcon from './assets/файлы/векторы/избранное.svg'; // Ensure the correct path
import itemImage1 from './assets/файлы/фотки/фото товара01.png'; // Ensure the correct path
import itemImage2 from './assets/файлы/фотки/фото товара02.png'; // Ensure the correct path
import itemImage3 from './assets/файлы/фотки/фото товара03.png'; // Ensure the correct path

const Menu = () => {
    return (
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
    );
};

export default Menu;
