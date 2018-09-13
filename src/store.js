import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import querystring from 'query-string';

const persistAuthorization = store => next => action => {
    if(action.type === 'AUTHORIZE') {
        sessionStorage.setItem('access_token', action.access_token);
        sessionStorage.setItem('authorized', true)
    }
    return next(action);
}

const access_token =
    sessionStorage.getItem('access_token') || 
    querystring.parse(location.hash).access_token || 
    '';

const isAuthorized = sessionStorage.getItem('authorized') || false;
const initalState = {
    authorization: {
        access_token,
        isAuthorized
    }
}

const store = createStore(
    reducers,
    initalState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, persistAuthorization),

)


export default store;