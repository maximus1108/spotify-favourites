import React, { Fragment, Component } from 'react';
import TableContainer from '../components/Table/TableContainer';
// import store from '../store';
import { fetchTracksIfNeeded } from '../actions/actions';
// import axios from 'axios';
// import SorterContainer from '../Components/Sorter/SorterContainer';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchTracksIfNeeded();
    }

    render () {
        console.log(this.props)
        return (
            this.props.showLoader ?
                <div>LOADING</div> :
                <TableContainer headings={
                    ['', 'Title', 'Artist', 'Length', 'Audio']
                }/>
            )
    }
}

const mapStateToProps = state => ({
    showLoader: state.redirect,
    tracks: state.tracks.tracks
})

const mapDispatchToProps = dispatch => bindActionCreators({ fetchTracksIfNeeded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home); 