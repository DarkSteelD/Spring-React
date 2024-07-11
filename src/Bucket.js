import React from 'react';
import CartPage from './CartPage';
import Menu from './Menu';
import FooterComponent from './FooterComponent';
import RecommendedProducts from './RecommendedProducts';
const Bucket = () => {
    return (
        <div>
            <Menu />
            <CartPage />
            <RecommendedProducts />
            <FooterComponent />
        </div>
    );
};

export default Bucket;
