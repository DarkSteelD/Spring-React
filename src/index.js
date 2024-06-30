// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/Spring-React">
    <HomePage />
  </BrowserRouter>,
  document.getElementById('root')
);
