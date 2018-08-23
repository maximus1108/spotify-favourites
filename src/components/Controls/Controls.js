import React from 'react';
import PlayButton from '../PlayButton/PlayButton';

export default ({
    trackId,
    trackUrl,
    isPlaying,
    playTrack,
    pauseTrack
}) => (
    <div className="controls">
        <PlayButton 
            trackId={ trackId }
            playTrack={ playTrack }
            pauseTrack={ pauseTrack }
            currentTrackId={ trackId }
            url={ trackUrl }
            isPlaying={ isPlaying }
            cssClasses={ 'controls__play' }
        />
    </div>
)