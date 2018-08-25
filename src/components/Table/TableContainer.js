import { connect } from 'react-redux';
import Table from './Table';
import React from 'react';
import PlayButton from '../PlayButton/PlayButtonContainer'

const getSortedProducts = (products, sorter) => {
    switch(sorter) {
        case 'PRICE_ASCENDING':
            return [].concat(products).sort((a,b) => a.offer.price - b.offer.price)
        case 'PRICE_DESCENDING':
            return [].concat(products).sort((a,b) => b.offer.price - a.offer.price)
        case 'NAME':
            return [].concat(products).sort((a,b) => {
                if(a.offer.name < b.offer.name) return -1;
                if(a.offer.name > b.offer.name) return 1;
                return 0;
            })
        default:
            return products
    }
}

const mapToTableRows = tracks => tracks.map(track =>
    [
        <img src={ track.album.images[0].url } />,
        track.name,
        track.artists.map(artist => artist.name).join(', '),
        (track.duration_ms / 1000 / 60).toFixed(2).toString().replace('.', ':'),
        <PlayButton 
            trackId={ track.id }
            url={ track.preview_url }
        />  
    ]
)

const getFilteredTracks = (tracks, query) =>
    tracks.filter(track =>
        track.name.toLowerCase().includes(query) ||
        track.artists.some(artist => artist.name.toLowerCase().includes(query))
    )

const mapStateToProps = state => ({
    data: mapToTableRows(getFilteredTracks(state.tracks.tracks, state.searchQuery))
})
export default connect(mapStateToProps)(Table)