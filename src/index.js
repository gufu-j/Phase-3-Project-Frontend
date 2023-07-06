import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom"
//import './index.css';
import App from './Components/App';
//mport reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>

);
