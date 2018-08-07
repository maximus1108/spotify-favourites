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

export default combineReducers({
    products,
    sortBy
});