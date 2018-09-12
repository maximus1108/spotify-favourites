import {
    RECEIVE_TRACKS,
    REQUEST_TRACKS,
    PLAY_TRACK,
    PAUSE_TRACK
} from '../actions/types';

export const tracks = (state = { 
    isFetching: false,
    tracksReceived: false,
    tracks: []
}, action) => {
    switch(action.type) {
        case REQUEST_TRACKS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_TRACKS:
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

export const playingTrack = (state = { 
    trackId: '',
    trackUrl: '',
    isPlaying: ''
}, action) => {
    switch(action.type) {
        case PLAY_TRACK:
            return {
                ...state,
                trackId: action.id,
                trackUrl: action.url,
                isPlaying: true
            }
        case PAUSE_TRACK:
        return {
            ...state,
            isPlaying: false
        }
        default:
            return state;
    }
}