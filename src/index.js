import './Assets/Styles/critical.scss';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App/AppContainer';

render(
        <Provider store={ store }>
            <App />
        </ Provider>,
    document.getElementById('root')
);
