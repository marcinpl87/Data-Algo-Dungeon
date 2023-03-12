import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './styles.scss';

document.addEventListener(
    'DOMContentLoaded',
    () => {
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter><App /></BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
);
