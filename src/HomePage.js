import React from 'react';
import './HomePage.css';
import PersonIcon from './assets/файлы/векторы/личный каб.svg';
import BucketIcon from './assets/файлы/векторы/мусорка.svg';
import MenuLogo from './assets/файлы/векторы/меню.svg';
import MixiLogo from './assets/mixi-logo.png';
import MainMenuImg from './assets/Main.png'; // Background for the menu
import PopularItems from './PopularItems';
import ImageGrid from './ImageGrid';
import ClothingCollection from './ClothingCollection';
import FooterComponent from './FooterComponent';
import TestImage from './Test';
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="banner" style={{ backgroundImage: `url(${MainMenuImg})` }}>
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
        <div class = "content">
          <h1>ЛЕТНЯЯ КОЛЛЕКЦИЯ 2024</h1>
          <button>КУПИТЬ</button>
        </div>
      </div>
      <PopularItems />
      <ImageGrid />
      <div class="ClothingWraper">
        <ClothingCollection />
        <ClothingCollection />
        <ClothingCollection />
      </div>
      <FooterComponent />
    </div>
  );
}

export default HomePage;