import React, { Fragment, Component } from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import { setProducts } from './actions';
// import axios from 'axios';
// import spotify from '../Utils/spotify'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Listings from '../../Pages/Listings';
import { connect } from 'react-redux';

// class App extends Component {
//     constructor() {
//         super();

        
//         // if(spotify.isAuthorized) {
//         //     spotify.requestFavourites()
//         // }
//         // else {
//         //     spotify.requestAuthorization()
//         // }
//     }

//     // componentDidMount() {
//     //     axios('http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air')
//     //         .then(response => {
//     //             store.dispatch(setProducts(response.data.widget.data.offers))
//     //         })
//     //         .catch(e => console.log(e))
//     // }

//     render () {
//         return (
//             <Provider store={ store }>
//                 <BrowserRouter>
//                     <Route exact path="/" component={ Home } />
//                 </BrowserRouter>
//             </Provider>
//         )
//     }
// }

class App extends Component {

    constructor() {
        super();
    }

    componentDidMount ()  {
        console.log(this.props)
    }

    render() {
        return (
            // <Provider store={ store }>
                <BrowserRouter>
                    <Fragment>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/listings" component={ Listings } />
                    </Fragment>
                </BrowserRouter>
            // </Provider>
        )
    }
}

const mapStateToProps = (state) =>  ({
    isAuthorized: state.authorize
})
    
export default connect(mapStateToProps)(App); 