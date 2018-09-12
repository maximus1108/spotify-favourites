import axios from 'axios';
import {
    REQUEST_PROFILE,
    RECEIVE_PROFILE
} from './types';

const requestProfile = _ => ({
    type: REQUEST_PROFILE
});

const receiveProfile = profileInfo => ({
    type: RECEIVE_PROFILE,
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