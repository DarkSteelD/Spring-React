import React from 'react';
import Menu from './Menu';
import ProductDetails from './ProductDetails'; // Assuming you have a ProductDetails component
import RecommendedProducts from './RecommendedProducts';
import FooterComponent from './FooterComponent';
const ProductPage = () => {
    return (
        <div className="product-page">
            <Menu />
            <ProductDetails />
            <RecommendedProducts />
            <RecommendedProducts />
            <FooterComponent />
        </div>
    );
};

export default ProductPage;
