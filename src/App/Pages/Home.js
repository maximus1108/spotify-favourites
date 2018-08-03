import React, { Fragment, Component } from 'react';
import TableContainer from '../Components/Table/TableContainer';
import store from '../store';
import { setProducts } from '../actions';
import axios from 'axios';
import SorterContainer from '../Components/Sorter/SorterContainer';
import { Link } from 'react-router-dom';

// class Home extends Component {
//     constructor() {
//         super();
//     }

//     componentDidMount() {
//         axios('http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air')
//             .then(response => {
//                 store.dispatch(setProducts(response.data.widget.data.offers))
//             })
//             .catch(e => console.log(e))
//     }

//     render () {
//         return (
//             <Fragment>
//                 <SorterContainer />
//                 <TableContainer
//                     headings = {[ 
//                         "Logo",
//                         "Merchant Name", 
//                         "Product Name",
//                         "Price",
//                         "Link"
//                     ]}
//                 />
//             </ Fragment>
//         )
//     }
// }

const Home  = () => (
    <Link to="/listings">
        listings
    </ Link>
)

export default Home; 