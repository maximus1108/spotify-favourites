import axios from 'axios';

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

export const playTrack = (id, url) => ({
    type: 'PLAY_SONG',
    id,
    url
});

export const pauseTrack = _ => ({
    type: 'PAUSE_SONG'
});