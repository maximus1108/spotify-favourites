import querystring from 'query-string';
import spotify from '../utils/spotify';
import axios from 'axios';

export const sortByName = _ => ({
    type: 'NAME'
});

const authorize = access_token => ({
    type: 'AUTHORIZE',
    access_token
});

const unauthorize = _ => ({
    type: 'UNAUTHORIZE'
});

const redirected = _ => ({
    type: 'REDIRECTED'
})

export const authorizeIfNeeded = _ => {
    const { access_token, state } = querystring.parse(location.hash);
    const storedState = localStorage.getItem(spotify.stateKey);

    return dispatch => {
        if(access_token) {
            dispatch(redirected())
            if(state === storedState)
                return dispatch(authorize(access_token));
            else
                return dispatch(unauthorize());
        }
        else {
            return spotify.requestAuthorization();
        }
    }
    
}

const requestTracks = _ => ({
    type: 'REQUEST_TRACKS'
});

const receiveTracks = tracks => ({
    type: 'RECEIVE_TRACKS',
    tracks
});

export const fetchTracksIfNeeded = _ => {

    return (dispatch, getState) => {
        const { 
            tracks: {
                tracksReceived
            }, tracks,
            authorization: {
                access_token
            }, authorization
        } = getState();

        if(tracksReceived === false) {
            dispatch(requestTracks());
            axios({
                url: 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=200',
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then(response => {
                dispatch(receiveTracks(response.data.items));
            })
            .catch(e => console.log(e));
        }
    }     
}

const requestProfile = _ => ({
    type: 'REQUEST_PROFILE'
});

const receiveProfile = profileInfo => ({
    type: 'RECEIVE_PROFILE',
    profileInfo
});

export const fetchProfileIfNeeded = _ => {
    return (dispatch, getState) => {
        const { 
            profile: {
                profileReceived
            }, profile,
            authorization: {
                access_token
            }, authorization
        } = getState();

        if(profileReceived === false) {
            dispatch(requestProfile());
            axios({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then(response => {
                const {
                    display_name,
                    email,
                    country,
                    followers: {
                        total: totalFollowers
                    }, followers,
                    images: [{
                        url: img
                    }], images
                } = response.data;

                dispatch(receiveProfile({
                    name: display_name,
                    email,
                    img,
                    followers: totalFollowers,
                    country
                }))
            })
        }
    }
}

export const playTrack = (id, url) => ({
    type: 'PLAY_SONG',
    id,
    url
});

export const pauseTrack = _ => ({
    type: 'PAUSE_SONG'
});

export const updateSearch = query => ({
    type: 'UPDATE_SEARCH_QUERY',
    query
});

export const removeSort = _ => ({
    type: 'SORT_NONE'
});

export const sortByTitleAscending = _ => ({
    type: 'SORT_TITLE_ASCENDING'
});

export const sortByTitleDescending = _ => ({
    type: 'SORT_TITLE_DESCENDING'
});

export const sortByArtistAscending = _ => ({
    type: 'SORT_ARTIST_ASCENDING'
});

export const sortByArtistDescending = _ => ({
    type: 'SORT_ARTIST_DESCENDING'
});