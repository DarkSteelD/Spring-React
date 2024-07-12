import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import HomePage from './HomePage';
import ClothingFull from './ClothingFull';
import ProductDetails from './ProdcutPage'; // Corrected from ProdcutPage to ProductPage
import Bucket from './Bucket';
import FavoritesPage from './FavoritesPage';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clothing" element={<ClothingFull />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/bucket" element={<Bucket />} /> 
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </HashRouter>
);

export default App;
