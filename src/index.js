import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider, } from "react-redux";
import authReducer from "./store/reducers/auth";

import 'react-html5-camera-photo/build/css/index.css';
import 'antd/dist/antd.css';
//import './App.css';
import './assets/scss/style.scss';
import './assets/scss/extra.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';


import 'react-phone-number-input/style.css'


const history = createBrowserHistory();

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer
}) 

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />

    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();