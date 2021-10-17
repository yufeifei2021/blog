import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routeview from './routeview';
import Routes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Routeview route={Routes} />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
