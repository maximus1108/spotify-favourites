import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sorter from './Sorter';
import {
    removeSort,
    sortByTitleAscending,
    sortByTitleDescending,
    sortByArtistAscending,
    sortByArtistDescending
} from '../../actions/actions';
    
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        removeSort,
        sortByTitleAscending,
        sortByTitleDescending,
        sortByArtistAscending,
        sortByArtistDescending
    }, dispatch);

export default connect(undefined, mapDispatchToProps)(Sorter)