import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sorter from './Sorter';
import {
    removeSort,
    sortByTitleAscending,
    sortByTitleDescending,
    sortByArtistAscending,
    sortByArtistDescending
} from '../../actions';
    
const mapDispatchToProps = dispatch => ({
    options: {
        'none': {
            text: 'None',
            action: dispatch(removeSort),
        },
        'title-ascending': {
            text: 'Title Ascending',
            action: dispatch(sortByTitleAscending),
        },
        'title-descending': {
            text: 'Title Descending',
            action: dispatch(sortByTitleDescending),
        },
        'artist-ascending': {
            text: 'Artist Ascending',
            action: dispatch(sortByArtistAscending),
        },
        'artist-descending': {
            text: 'Artist Descending',
            action: dispatch(sortByArtistDescending),
        }
    }
});

export default connect(undefined, mapDispatchToProps)(Sorter)