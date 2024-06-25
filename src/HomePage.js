import React from 'react';
import './HomePage.css';
import MainMenuImg from './assets/Main.png';
import PersonIcon from './assets/Person.svg';
import BucketIcon from './assets/Bucket.svg';
import MenuLogo from './assets/Menu.svg';
import MixiLogo from './assets/mixi-logo.png';

const HomePage = () => {
  return (
    <div className="homepage" style={{ backgroundImage: `url(${MainMenuImg})` }}>
      <style>
        {`
          @font-face {
            font-family: 'Code Next-Trial';
            src: url('/fonts/CodeNext-Trial-Black.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
          }
          body, .homepage, .navbar, .menu, .right-menu, .left-menu, .content {
            font-family: 'Code Next-Trial', sans-serif;
          }
        `}
      </style>
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
      <div className="content">
        <h1>ЛЕТНЯЯ КОЛЛЕКЦИЯ 2024</h1>
        <button>КУПИТЬ</button>
      </div>
    </div>
  );
}

export default HomePage;
