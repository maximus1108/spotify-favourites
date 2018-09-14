import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import querystring from 'query-string';

const persistAuthorization = _store => next => action => {
    if(action.type === 'AUTHORIZE') {
        sessionStorage.setItem('access_token', action.access_token);
        sessionStorage.setItem('authorized', true)
    }
    return next(action);
}

const initalState = {
    authorization: {
        access_token: sessionStorage.getItem('access_token') || 
            querystring.parse(location.hash).access_token || 
            '',
        isAuthorized: sessionStorage.getItem('authorized') || false
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initalState,
    composeEnhancers(
        applyMiddleware(thunk, persistAuthorization)
    )
)

export default store;