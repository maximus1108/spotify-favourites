import ProfilePreview from './ProfilePreview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    name: state.profile.profileInfo.name,
    img: state.profile.profileInfo.img
});

export default connect(mapStateToProps)(ProfilePreview);