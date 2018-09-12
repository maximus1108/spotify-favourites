export const searchQuery = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_QUERY':
            return action.query;
        default:
            return state;
    }
}

export const sortBy = (state = 'SORT_NONE', action) => {
    switch(action.type) {
        case 'SORT_NONE':
        case 'SORT_TITLE_ASCENDING':
        case 'SORT_TITLE_DESCENDING':
        case 'SORT_ARTIST_ASCENDING':
        case 'SORT_ARTIST_DESCENDING':
            return action.type;
        default:
            return state;
    }
}