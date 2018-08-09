import querystring from 'query-string';

export const setProducts = products => ({
    type: 'SET_PRODUCTS',
    products
})

export const sortByPriceAscending = _ => ({
    type: 'PRICE_ASCENDING'
})

export const sortByPriceDescending = _ => ({
    type: 'PRICE_DESCENDING'
})

export const sortByName = _ => ({
    type: 'NAME'
})

const generateRandomString = length =>  {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return new Array(length).fill('').reduce(string => string + characters.charAt(Math.floor(Math.random() * characters.length)), '');
}

const stateKey = 'spotify_auth_state';

const requestAuthorization = () => {
    const url = `https://accounts.spotify.com/authorize`  
    const client_id = 'aac295ff1ab247a6bcd0bf0d9ad8a14f'; // Your client id
    const redirect_uri = 'http://localhost:3001/'; // Your redirect uri
    const scope = 'user-read-private user-read-email user-top-read';
    const state = generateRandomString(16)

    // const storedState = localStorage.getItem(stateKey);
    const queries = {
        response_type: 'token',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
    }

    localStorage.setItem(stateKey, state);

    window.location = `${url}?${querystring.stringify(queries)}`
}

const authorize = _ => ({
    type: 'AUTHORIZE'
});

const unauthorize = _ => ({
    type: 'UNAUTHORIZE'
});

export const authorizeIfNeeded = () => {
    const { access_token, state } = querystring.parse(location.hash);
    // console.log(querystring.parse(location.hash))
    // const stateKey = 'spotify_auth_state';
    const storedState = localStorage.getItem(stateKey);
    // console.log(state, storedState)
    debugger;
    return dispatch => {
        if(access_token) {
            if(state === storedState)
                return dispatch(authorize())
            else
                return dispatch(unauthorize())
        }
        else {
            return requestAuthorization();
        }
    }
    
}
