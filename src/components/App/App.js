import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Unauthorized from '../../pages/Unauthorized';
import Controls from '../Controls/ControlsContainer';

class App extends Component {

    constructor({ authorizeIfNeeded, fetchTracksIfNeeded, fetchProfileIfNeeded}) {
        super();
        authorizeIfNeeded();
        fetchTracksIfNeeded();
        fetchProfileIfNeeded();
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
        return (
            <Fragment>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    {/* <Fragment> */}
                        {/* <Route exact path="/" 
                            render={_ => this.props.isAuthorized || this.props.redirect ? <Home /> : <Unauthorized/> }/>
                        <Route exact path="/profile" component={ Profile } /> */}
                        <Route exact path="/" component={ Home } /> 
                    {/* </Fragment> */}
                </BrowserRouter>
                <Controls />
            </Fragment>
        )
    }
}

export default App;