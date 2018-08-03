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