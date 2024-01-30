import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './app/Router.tsx';
import { BrowserRouter } from 'react-router-dom';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
