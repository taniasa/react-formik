import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'


import './index.css';
// import App from './App';
import AuthOrApp from './main/app'
// authOrApp
import reducers from './main/reducers'

import registerServiceWorker from './registerServiceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp></AuthOrApp>
    </Provider>    
    , document.getElementById('root'));
registerServiceWorker();
