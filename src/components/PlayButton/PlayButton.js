import React from 'react';

const PlayButton = ({
    trackId,
    playTrack,
    pauseTrack,
    currentTrackId,
    url,
    isPlaying
}) => (
    <button
        onClick={trackId === currentTrackId && isPlaying ? pauseTrack : _ => playTrack(trackId, url)}
        className={`play-btn ${trackId === currentTrackId && isPlaying ? `play-btn--pause` : `play-btn--play`}`}    
    >
    </button>
)

export default PlayButton;