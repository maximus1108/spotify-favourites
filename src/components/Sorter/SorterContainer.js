import { connect } from 'react-redux';
import Sorter from './Sorter';
import { sortByPriceAscending, sortByPriceDescending, sortByName } from '../../actions';

    
const mapDispatchToProps = (dispatch) => ({
    sortByPriceAscending: _ => dispatch(sortByPriceAscending()),
    sortByPriceDescending: _ => dispatch(sortByPriceDescending()),
    sortByName: _ => dispatch(sortByName())
})

export default connect(undefined, mapDispatchToProps)(Sorter)