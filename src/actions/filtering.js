import {
    UPDATE_SEARCH_QUERY,
    SORT_NONE,
    SORT_TITLE_ASCENDING,
    SORT_TITLE_DESCENDING,
    SORT_ARTIST_ASCENDING,
    SORT_ARTIST_DESCENDING
} from './types';

export const updateSearch = query => ({
    type: UPDATE_SEARCH_QUERY,
    query
});

export const removeSort = _ => ({
    type: SORT_NONE
});

export const sortByTitleAscending = _ => ({
    type: SORT_TITLE_ASCENDING
});

export const sortByTitleDescending = _ => ({
    type: SORT_TITLE_DESCENDING
});

export const sortByArtistAscending = _ => ({
    type: SORT_ARTIST_ASCENDING
});

export const sortByArtistDescending = _ => ({
    type: SORT_ARTIST_DESCENDING
});