
import {
    RECEIVE_PROFILE,
    REQUEST_PROFILE
} from '../actions/types';

const profileInfo = (state = {
    name: '',
    email: '',
    img: '',
    followers: 0,
    country: ''
}, action) => {
    switch(action.type) {
        case RECEIVE_PROFILE:
            return {
                ...action.profileInfo
            }
        default:
            return state;
    }
}

export const profile = (state = {
    profileReceived: false,
    isFetching: false,
    profileInfo: {}
}, action) => {
    switch(action.type) {
        case REQUEST_PROFILE:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_PROFILE:
            return {
                ...state,
                isFetching: false,
                profileReceived: true,
                profileInfo: profileInfo(state.profileInfo, action)
            }
        default: 
            return state;
    }
}