// src/App.js
import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import HomePage from './HomePage';
import ClothingFull from './ClothingFull';
import ProductDetails from './ProdcutPage'; // Ensure this file name is correct
import Bucket from './Bucket';
import FavoritesPage from './FavoritesPage';
import NotFound from './NotFound';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clothing" element={<ClothingFull />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/bucket" element={<Bucket />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default App;
