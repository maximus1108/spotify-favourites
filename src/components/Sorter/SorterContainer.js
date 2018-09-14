import { connect } from 'react-redux';
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
            action: _ => dispatch(removeSort()),
        },
        'title-ascending': {
            text: 'Title Ascending',
            action: _ => dispatch(sortByTitleAscending()),
        },
        'title-descending': {
            text: 'Title Descending',
            action: _ => dispatch(sortByTitleDescending()),
        },
        'artist-ascending': {
            text: 'Artist Ascending',
            action: _ => dispatch(sortByArtistAscending()),
        },
        'artist-descending': {
            text: 'Artist Descending',
            action: _ => dispatch(sortByArtistDescending()),
        }
    }
});

export default connect(undefined, mapDispatchToProps)(Sorter)