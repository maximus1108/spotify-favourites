import { connect } from 'react-redux';
import Table from './Table';
import React from 'react';
import PlayButton from '../PlayButton/PlayButtonContainer'

const getArtistsForTrack = track => track.artists.map(artist => artist.name).join(', ');

const mapToTableRows = tracks => tracks.map(track =>
    [
        <img src={ track.album.images[0].url } />,
        track.name,
        getArtistsForTrack(track),
        (track.duration_ms / 1000 / 60).toFixed(2).toString().replace('.', ':'),
        <PlayButton 
            trackId={ track.id }
            url={ track.preview_url }
        />  
    ]
)

const getFilteredTracks = query => tracks =>
    tracks.filter(track =>
        track.name.toLowerCase().includes(query) ||
        track.artists.some(artist => artist.name.toLowerCase().includes(query))
    );

const getSortedTracks = criteria => tracks => {
    switch(criteria) {
        case 'SORT_NONE':
            return tracks;
        case 'SORT_TITLE_ASCENDING':
            return [].concat(tracks).sort((trackA, trackB) => {
                if(trackA.name < trackB.name) return -1;
                if(trackA.name > trackB.name) return 1;
                return 0;
            });
        case 'SORT_TITLE_DESCENDING':
            return [].concat(tracks).sort((trackA, trackB) => {
                if(trackA.name > trackB.name) return -1;
                if(trackA.name < trackB.name) return 1;
                return 0;
            });
        case 'SORT_ARTIST_ASCENDING':
            return [].concat(tracks).sort((trackA, trackB) => {
                const trackAArtists = getArtistsForTrack(trackA);
                const trackBArtists = getArtistsForTrack(trackB);
                if(trackAArtists < trackBArtists) return -1;
                if(trackAArtists > trackBArtists) return 1;
                return 0;
            });
        case 'SORT_ARTIST_DESCENDING':
            return [].concat(tracks).sort((trackA, trackB) => {
                const trackAArtists = getArtistsForTrack(trackA);
                const trackBArtists = getArtistsForTrack(trackB);
                if(trackAArtists > trackBArtists) return -1;
                if(trackAArtists < trackBArtists) return 1;
                return 0;
            });
        default:
            tracks
    }
}

const pipe = (...funcs) => input => funcs.reduce((value, func) => func(value), input);

const mapStateToProps = state => ({
    data: pipe(
            getFilteredTracks(state.searchQuery),
            getSortedTracks(state.sortBy),
            mapToTableRows
        )(state.tracks.tracks)
});

export default connect(mapStateToProps)(Table)