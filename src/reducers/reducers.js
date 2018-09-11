import { combineReducers } from "redux";

const authorization = (state = {
    isAuthorized: false,
    access_token: '',
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

const profileInfo = (state = {
    name: '',
    email: '',
    img: '',
    followers: 0,
    country: ''
}, action) => {
    switch(action.type) {
        case 'RECEIVE_PROFILE':
            return {
                ...action.profileInfo
            }
        default:
            return state;
    }
}

const profile = (state = {
    profileReceived: false,
    isFetching: false,
    profileInfo: {}
}, action) => {
    switch(action.type) {
        case 'REQUEST_PROFILE':
            return {
                ...state,
                isFetching: true
            }
        case 'RECEIVE_PROFILE':
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

const searchQuery = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_QUERY':
            return action.query;
        default:
            return state;
    }
}

const sortBy = (state = 'SORT_NONE', action) => {
    switch(action.type) {
        case 'SORT_NONE':
        case 'SORT_TITLE_ASCENDING':
        case 'SORT_TITLE_DESCENDING':
        case 'SORT_ARTIST_ASCENDING':
        case 'SORT_ARTIST_DESCENDING':
            return action.type;
        default:
            return state;
    }
}

export default combineReducers({
    sortBy,
    authorization,
    redirect,
    tracks,
    playingTrack,
    searchQuery,
    profile
});