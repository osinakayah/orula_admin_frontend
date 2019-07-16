import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App/index';
import * as serviceWorker from './serviceWorker';
import config from './config';

import createStore from './Redux'

const app = (
    <Provider store={createStore()}>
        <BrowserRouter basename={config.basename}>
            {/* basename="/datta-able" */}
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
