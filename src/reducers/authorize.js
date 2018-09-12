import {
    UNAUTHORIZE,
    AUTHORIZE,
    REDIRECTED
} from '../actions/types'

export const authorization = (state = {
    isAuthorized: false,
    access_token: '',
}, action) => {
    switch(action.type) {
        case AUTHORIZE:
            return {
                ...state,
                isAuthorized: true,
                access_token: action.access_token
            };
        case UNAUTHORIZE:
            return {
                ...state,
                isAuthorized: false
            };;
        default:
            return state
    }
}

export const redirect = (state = true, action) => {
    switch(action.type) {
        case REDIRECTED:
            return false;
        default:
            return state;
    }
}