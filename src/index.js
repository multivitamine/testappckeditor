import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Render the <App> in the <div class="app"></div> element found in the DOM.
ReactDOM.render(
  <App
      // Feeding the application with predefined products.
      // In a real-life application, this sort of data would be loaded
      // from a database. To keep this tutorial simple, a few
      //  hard–coded product definitions will be used.
      products={[
          {
              id: 1,
              name: 'Colors of summer in Poland',
              price: '$1500',
              image: 'product1.jpg'
          },
          {
              id: 2,
              name: 'Mediterranean sun on Malta',
              price: '$1899',
              image: 'product2.jpg'
          },
          {
              id: 3,
              name: 'Tastes of Asia',
              price: '$2599',
              image: 'product3.jpg'
          },
          {
              id: 4,
              name: 'Exotic India',
              price: '$2200',
              image: 'product4.jpg'
          }
      ]}
  />,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
