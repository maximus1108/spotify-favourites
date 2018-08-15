import PlayButton from './PlayButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playTrack, pauseTrack } from '../../actions/actions'

const mapStateToProps = state => ({
    currentTrackId: state.playingTrack.trackId,
    isPlaying: state.playingTrack.isPlaying,
});

const mapDispatchToProps = dispatch => bindActionCreators({ playTrack, pauseTrack }, dispatch) ;

export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);