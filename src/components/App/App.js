import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Unauthorized from '../../pages/Unauthorized';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authorizeIfNeeded } from '../../actions/actions';
import Controls from '../Controls/ControlsContainer';

class App extends Component {

    constructor({ authorizeIfNeeded }) {
        super();
        authorizeIfNeeded();
        this.audio = new Audio();
    }

    componentDidUpdate(){
        if(this.props.playTrack) {
            this.audio.src = this.props.trackUrl;
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    }

    render() {
        // console.log(this.props);
        return (
            <Fragment>
                <BrowserRouter>
                    <Fragment>
                        <Route exact path="/" 
                            render={_ => this.props.isAuthorized || this.props.redirect ? <Home /> : <Unauthorized/> }/>
                        <Route exact path="/profile" component={ Profile } />
                    </Fragment>
                </BrowserRouter>
                <Controls />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.authorization.isAuthorized,
    redirect: state.redirect,
    playTrack: state.playingTrack.isPlaying,
    trackUrl: state.playingTrack.trackUrl
})

const mapDispatchToProps = dispatch => bindActionCreators({ authorizeIfNeeded }, dispatch)
    
export default connect(mapStateToProps, mapDispatchToProps)(App); 