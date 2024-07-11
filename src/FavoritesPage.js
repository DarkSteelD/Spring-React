import React from 'react';
import CartPage from './Favorites';
import Favorites from './Favorites';
import Menu from './Menu';
import FooterComponent from './FooterComponent';
import RecommendedProducts from './RecommendedProducts';
const FavoritesPage = () => {
    return (
        <div>
            <Menu />
            <CartPage />
            <RecommendedProducts />
            <FooterComponent />
        </div>
    );
};

export default FavoritesPage;
