// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ClothingFull from './ClothingFull';
import ProductDetails from './ProdcutPage'; // Ensure the file name matches your import
import Bucket from './Bucket';
import FavoritesPage from './FavoritesPage';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clothing" element={<ClothingFull />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/bucket" element={<Bucket />} /> 
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </div>
);

export default App;
