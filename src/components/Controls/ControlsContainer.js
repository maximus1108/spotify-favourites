import Controls from './Controls';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playTrack, pauseTrack } from '../../actions'

const mapStateToProps = state => ({
    trackId: state.playingTrack.trackId,
    trackUrl: state.playingTrack.trackUrl,
    isPlaying: state.playingTrack.isPlaying,
});

const mapDispatchToProps = dispatch => bindActionCreators({ playTrack, pauseTrack }, dispatch) ;

export default connect(mapStateToProps, mapDispatchToProps)(Controls);