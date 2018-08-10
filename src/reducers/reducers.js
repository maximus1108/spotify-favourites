import { combineReducers } from "redux";

const products = (state = [], action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return action.products;
        default:
            return state
    }
}

const sortBy = (state = 'NAME', action) => {
    switch(action.type) {
        case 'PRICE_ASCENDING':
        case 'PRICE_DESCENDING':
        case 'NAME':
            return action.type;
        default:
            return state
    }
}

const authorize = (state = false, action) => {
    switch(action.type) {
        case 'AUTHORIZE':
            return true;
        case 'UNAUTHORIZE':
            return false;
        default:
            return state
    }
}

const redirect = (state = true, action) => {
    switch(action.type) {
        case 'REDIRECTED':
            return false;
        default:
            return state;
    }
}

export default combineReducers({
    products,
    sortBy,
    authorize,
    redirect
});