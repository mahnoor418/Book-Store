import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { CartProvider } from '../src/components/CartContext';
import { ThemeProvider } from './components/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider> 
        <Router> 
          <App />
        </Router>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);









// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css'
// import App from './App';
// import { CartProvider } from '../src/components/CartContext';
// import { ThemeProvider } from './components/ThemeContext';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ThemeProvider>
//     <App />
//     <CartProvider> 
//     <Router> 
//     <App />
//     </Router>
//     </CartProvider>,
//     </ThemeProvider>,
//   </React.StrictMode>
// );

