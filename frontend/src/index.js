import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {legacy_createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = legacy_createStore()
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


