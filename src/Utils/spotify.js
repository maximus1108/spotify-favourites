import querystring from 'query-string';
import axios from 'axios';

const client_id = 'aac295ff1ab247a6bcd0bf0d9ad8a14f'; // Your client id
const redirect_uri = 'http://localhost:3001/'; // Your redirect uri
const scope = 'user-read-private user-read-email user-top-read';
const params = querystring.parse(location.hash);
const stateKey = 'spotify_auth_state';
const storedState = localStorage.getItem(stateKey);

const isAuthorized = Object.keys(params).length > 0 && params.access_token && params.state === storedState;

const generateRandomString = length =>{
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const state = generateRandomString(16);

export default {
    get isAuthorized() {
        return isAuthorized;
    },
    requestAuthorization() {
        const url = `https://accounts.spotify.com/authorize`  
        const queries = {
            response_type: 'token',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }

        localStorage.setItem(stateKey, state);

        window.location = `${url}?${querystring.stringify(queries)}`

    },
    requestFavourites() {
        console.log(params.access_token)
        axios({
            url: 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=200',
            headers: {
                'Authorization': `Bearer ${params.access_token}`
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(e => console.log(e));
    }

}