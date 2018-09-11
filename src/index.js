//import css
//temp files for now to enable build
// import './Assets/Styles/critical.scss';
import './assets/styles/index.scss';

import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App/App';

render(
        <Provider store={ store }>
            <App />
        </ Provider>,
    document.getElementById('root')
);
