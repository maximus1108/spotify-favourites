import { combineReducers } from "redux";

import { authorization, redirect } from './authorize';
import { searchQuery, sortBy } from './filtering';
import { profile } from './filtering';
import { tracks, playingTrack } from './tracks';


export default combineReducers({
    sortBy,
    authorization,
    redirect,
    tracks,
    playingTrack,
    searchQuery,
    profile
});