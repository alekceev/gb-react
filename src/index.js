import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {Provider as ReduxProvider} from 'react-redux';

import { App } from './components/App';
import {store} from './redux/store';

ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </BrowserRouter>,
    document.querySelector('#root')
);