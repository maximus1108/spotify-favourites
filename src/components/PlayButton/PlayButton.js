import React from 'react';

const PlayButton = ({
    trackId,
    playTrack,
    pauseTrack,
    currentTrackId,
    url,
    isPlaying
}) => (
    <button onClick={trackId === currentTrackId && isPlaying ? pauseTrack : _ => playTrack(trackId, url)}>
        { trackId === currentTrackId && isPlaying ? 'Pause' : 'Play' }
    </button>
)

export default PlayButton;