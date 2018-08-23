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

const authorization = (state = {
    isAuthorized: false,
    access_token: ''
}, action) => {
    switch(action.type) {
        case 'AUTHORIZE':
            return {
                ...state,
                isAuthorized: true,
                access_token: action.access_token
            };
        case 'UNAUTHORIZE':
            return {
                ...state,
                isAuthorized: false
            };;
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


// const requestTracks = _ => ({
//     type: 'REQUEST_TRACKS'
// });

// const receiveTracks = _ => ({
//     type: 'RECEIVE_TRACKS'
// });

const tracks = (state = { 
    isFetching: false,
    tracksReceived: false,
    tracks: []
}, action) => {
    switch(action.type) {
        case 'REQUEST_TRACKS':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_TRACKS':
            return {
                ...state,
                isFetching: false,
                tracksReceived: true,
                tracks: action.tracks
            }
        default:
            return state
    }
}

const playingTrack = (state = { 
    trackId: '',
    trackUrl: '',
    isPlaying: ''
}, action) => {
    switch(action.type) {
        case 'PLAY_SONG':
            return {
                ...state,
                trackId: action.id,
                trackUrl: action.url,
                isPlaying: true
            }
        case 'PAUSE_SONG':
        return {
            ...state,
            isPlaying: false
        }
        default:
            return state;
    }
}

export default combineReducers({
    sortBy,
    authorization,
    redirect,
    tracks,
    playingTrack
});