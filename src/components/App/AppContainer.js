import App from './App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authorizeIfNeeded, fetchProfileIfNeeded, fetchTracksIfNeeded } from '../../actions';

const mapStateToProps = state => ({
    isAuthorized: state.authorization.isAuthorized,
    redirect: state.redirect,
    playTrack: state.playingTrack.isPlaying,
    trackUrl: state.playingTrack.trackUrl
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        authorizeIfNeeded,
        fetchProfileIfNeeded,
        fetchTracksIfNeeded 
    }, dispatch)
    
export default connect(mapStateToProps, mapDispatchToProps)(App); 