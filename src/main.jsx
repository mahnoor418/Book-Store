import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App';
import { CartProvider } from '../src/components/CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <Router> 
      <App />
    </Router>
    </CartProvider>,
  </React.StrictMode>
);

