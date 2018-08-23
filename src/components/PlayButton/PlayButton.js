import React from 'react';

const PlayButton = ({
    trackId,
    playTrack,
    pauseTrack,
    currentTrackId,
    url,
    isPlaying,
    cssClasses = ''
}) => (
    <button
        onClick={trackId === currentTrackId && isPlaying ? pauseTrack : _ => trackId && playTrack(trackId, url)}
        className={`play-btn ${cssClasses} ${trackId === currentTrackId && isPlaying ? `play-btn--pause` : `play-btn--play`}`}    
    >
    </button>
)

export default PlayButton;