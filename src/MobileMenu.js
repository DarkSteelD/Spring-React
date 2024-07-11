import React from 'react';
import './Menu.css';
import MixiLogo from './assets/mixi-logo.png'; // Ensure the correct path
import MenuLogo from './assets/файлы/векторы/меню.svg'; // Ensure the correct path
import PersonIcon from './assets/файлы/векторы/личный каб.svg'; // Ensure the correct path
import BucketIcon from './assets/файлы/векторы/мусорка.svg'; // Ensure the correct path
import favoriteIcon from './assets/файлы/векторы/избранное.svg'; // Ensure the correct path
import SearchIcon from './assets/файлы/векторы/search-icon.svg'; // Ensure the correct path

const MobileMenu = () => {
    return (
        <div className="menu-container">
            <nav className="navbar">
                <div className="navbar-top">
                    <div className="left-menu">
                        <img src={MenuLogo} alt="Menu" className="menu-icon" />
                        <img src={PersonIcon} alt="Войти" className="icon" />
                    </div>
                    <img src={MixiLogo} alt="mixi" className="mixi-logo" />
                    <div className="right-menu">
                        <a href="#"><img src={favoriteIcon} alt="Избранное" className="icon" /></a>
                        <a href="#"><img src={SearchIcon} alt="Search" className="icon" /></a>
                        <a href="#"><img src={BucketIcon} alt="Корзина" className="icon" /></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MobileMenu;
