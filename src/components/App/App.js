import React, { Fragment, Component } from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import { setProducts } from './actions';
// import axios from 'axios';
// import spotify from '../Utils/spotify'
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Unauthorized from '../../pages/Unauthorized';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authorizeIfNeeded } from '../../actions/actions';
import store from '../../store';
import { debug } from 'util';

class App extends Component {

    constructor({ authorizeIfNeeded }) {
        super();
        // debugger
        authorizeIfNeeded();
    }

    render() {
        console.log(this.props)
        // debugger
        return (
            <BrowserRouter>
                <Fragment>
                    <Route exact path="/" 
                        render={_ => this.props.isAuthorized || this.props.redirect ? <Home /> : <Unauthorized/> }/>
                    <Route exact path="/profile" component={ Profile } />
                </Fragment>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.authorization.isAuthorized,
    redirect: state.redirect
})

const mapDispatchToProps = dispatch => bindActionCreators({ authorizeIfNeeded }, dispatch)
    
export default connect(mapStateToProps, mapDispatchToProps)(App); 