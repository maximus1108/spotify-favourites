import React, { Fragment } from 'react';

export default ({
    removeSort,
    sortByTitleAscending,
    sortByTitleDescending,
    sortByArtistAscending,
    sortByArtistDescending
}) => {

    const onSelectChange = e => {
        const { value } = e.target;
        if(value === 'none')
            removeSort();
        else if(value === 'title-ascending')
            sortByTitleAscending();
        else if (value === 'title-descending')
            sortByTitleDescending()
        else if(value === 'artist-ascending')
            sortByArtistAscending();
        else if (value === 'artist-descending')
            sortByArtistDescending()
    }

    return (
        <Fragment>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={onSelectChange}>
                <option value="none">None</option>
                <option value="title-ascending">Title Ascending</option>
                <option value="title-descending">Title Descendng</option>
                <option value="artist-ascending">Artist Ascending</option>
                <option value="artist-descending">Artist Descendng</option>
            </select>
        </Fragment>
    );
}