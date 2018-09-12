import spotify from '../utils/spotify';
import querystring from 'query-string';
import {
    AUTHORIZE,
    UNAUTHORIZE,
    REDIRECTED
} from './types'

const authorize = access_token => ({
    type: AUTHORIZE,
    access_token
});

const unauthorize = _ => ({
    type: UNAUTHORIZE
});

const redirected = _ => ({
    type: REDIRECTED
})

export const authorizeIfNeeded = _ => {
    const { state } = querystring.parse(location.hash);
    const storedState = sessionStorage.getItem(spotify.stateKey);

    return (dispatch, getState) => {
        const { access_token, isAuthorized } = getState().authorization;

        if(access_token || isAuthorized) {
            dispatch(redirected())
            if(state === storedState || isAuthorized)
                return dispatch(authorize(access_token));
            else
                return dispatch(unauthorize());
        }
        else {
            return spotify.requestAuthorization();
        }
    }
    
}