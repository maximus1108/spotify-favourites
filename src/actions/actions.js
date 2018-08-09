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


const requestAuthorization = () => {
    const url = `https://accounts.spotify.com/authorize`  
    const queries = {
        response_type: 'token',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
    }

    // localStorage.setItem(stateKey, state);

    window.location = `${url}?${querystring.stringify(queries)}`
}

const authorize = _ => ({
    type: 'AUTHORIZE'
});

export const authorizeIfNeeded = () => {
    const { access_token } = querystring.parse(location.hash);
    
    return _ => {
        if(access_token) {
            dispatch(authorize())
        }
        else {
            requestAuthorization();
        }
    }
    
}
