import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import reducers from './Reducers'
import middleware from './Middleware'
import * as API from './API/_DATA'

let store = createStore(reducers,middleware)



window.debugAPI = API
window.debugStore = store

ReactDOM.render(

        <Provider store={store}>
            <App />
        </Provider>


    , document.getElementById('root'));
registerServiceWorker();
