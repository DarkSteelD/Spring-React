import React, { useState } from 'react';
import './CartPage.css';
import productImage from './assets/файлы/фотки/фото товара01.png'; // Ensure the correct path
import favoriteIcon from './assets/файлы/векторы/избранное.svg'; // Ensure the correct path
import deleteIcon from './assets/файлы/векторы/мусорка.svg'; // Ensure the correct path

const CartPage = () => {
    const [items, setItems] = useState([
        { id: 1, title: 'Льняная рубашка оверсют', price: 4599, size: '46', quantity: 1, imgSrc: productImage },
        { id: 2, title: 'Льняная рубашка оверсют', price: 4599, size: '46', quantity: 1, imgSrc: productImage },
    ]);

    const handleQuantityChange = (id, delta) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const handleRemoveItem = id => {
        setItems(items.filter(item => item.id !== id));
    };

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <div className="cart-wrapper">
                <div className="cart-header">
                    <h2>корзина</h2>
                    <span>{totalItems} товара</span>
                </div>
                <div className="cart-main-wrapper">
                    <div className="select-all">
                        <input type="checkbox" />
                        <span>выбрать все</span>
                        <img src={deleteIcon} alt="delete all" />
                        <span>{totalItems}</span>
                    </div>
                    <div className="cart-table">
                        <div className="cart-table-header">
                            <div className="cart-items">
                                {items.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <div className="item-info">
                                            <input type="checkbox" />
                                            <img src={item.imgSrc} alt={item.title} />
                                            <div className="item-details">
                                                <h3>{item.title}, S {item.size}</h3>
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                        <div className="item-controls">
                                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                            <div className="item-actions">
                                                <img src={favoriteIcon} alt="favorite" />
                                                <span>в избранное</span>
                                                <img src={deleteIcon} alt="delete" onClick={() => handleRemoveItem(item.id)} />
                                                <span>удалить</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-summary">
                            <h3>сумма заказа</h3>
                            <div className="order-summary-content">
                                <p>2 товара <span>{totalItems * items[0].price}</span></p>
                                <p>итого <span>{totalPrice}</span></p>
                                <p>Без учета возможной стоимости доставки</p>
                                <button>ОФОРМИТЬ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
