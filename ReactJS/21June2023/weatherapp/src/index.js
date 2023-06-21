import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers/index';
const store = applyMiddleware(ReduxPromise)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store(rootReducer, composeWithDevTools())}>
    <App></App>
  </Provider>

);
reportWebVitals();
