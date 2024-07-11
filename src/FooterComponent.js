import React from 'react';
import './FooterComponent.css'; // Import the CSS file
import MixiLogo from './assets/mixi-logo.png'; // Ensure the correct path
const FooterComponent = () => {
    return (
        <div className="footer-rapper">
            <div className="footer-wrapper">
                <div className="footer-component">
                    <div className="footer-sections">
                        <div className="footer-section">
                            <h3>одежда</h3>
                            <p>блузки</p>
                            <p>рубашки</p>
                            <p>брюки</p>
                            <p>джинсы</p>
                            <p>купальники</p>
                            <p>нижнее белье</p>
                            <p>штаны</p>
                            <p>худи и свитшоты</p>
                            <p>футболки и поло</p>
                            <p>шорты</p>
                            <p>юбки</p>
                        </div>
                        <div className="footer-section">
                            <h3>обувь</h3>
                            <p>балетки</p>
                            <p>босоножки</p>
                            <p>ботинки</p>
                            <p>кроссовки</p>
                            <p>сапоги</p>
                            <p>тапочки</p>
                        </div>
                        <div className="footer-section">
                            <h3>аксессуары</h3>
                            <p>для волос</p>
                            <p>головные уборы</p>
                            <p>зонты</p>
                            <p>электроника</p>
                            <p>косметика</p>
                        </div>
                        <div className="footer-section">
                            <h3>игрушки</h3>
                            <p>мягкие игрушки</p>
                            <p>конструкторы</p>
                            <p>для девочек</p>
                            <p>для мальчиков</p>
                        </div>
                        <div className="footer-section">
                            <h3>контакты</h3>
                            <p>8 987 654 32 10</p>
                        </div>
                        <div className="footer-section">
                            <h3>о нас</h3>
                            <p>оплата и доставка</p>
                            <p>обмен и возврат</p>
                            <p>условия гарантии</p>
                            <p>политика конфиденциальности</p>
                        </div>
                    </div>
                    <div className="feedback-section">
                        <h3>отправить отзыв</h3>
                        <input type="text" placeholder="телефон" />
                        <textarea placeholder="ваш отзыв"></textarea>
                        <button>отправить</button>
                    </div>
                    <div className="footer-logo">
                        <p>mixi</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
