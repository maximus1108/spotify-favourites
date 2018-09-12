import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './Search';
import { updateSearch } from '../../actions';

const mapDispatchToProps = dispatch => bindActionCreators({ updateSearch }, dispatch);

export default connect(undefined, mapDispatchToProps)(Search)