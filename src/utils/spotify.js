import querystring from 'query-string';

const client_id = 'aac295ff1ab247a6bcd0bf0d9ad8a14f'; // Your client id
const redirect_uri = 'http://localhost:3001/'; // Your redirect uri
const scope = 'user-read-private user-read-email user-top-read';
const stateKey = 'spotify_auth_state';

const generateRandomString = length =>  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return new Array(length).fill('').reduce(string => string + characters.charAt(Math.floor(Math.random() * characters.length)), '');
}

export default {
    requestAuthorization() {
        const url = `https://accounts.spotify.com/authorize`;
        const state = generateRandomString(16);

        const queries = {
            response_type: 'token',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        };
    
        sessionStorage.setItem(stateKey, state);
    
        window.location = `${url}?${querystring.stringify(queries)}`;

    },
    stateKey
}