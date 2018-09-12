import React, { Fragment, Component } from 'react';
import Header from '../components/Header/Header';
import TableContainer from '../components/Table/TableContainer';
import Search from '../Components/Search/SearchContainer';
import Sorter from '../Components/Sorter/SorterContainer';
import ProfilePreview from '../Components/ProfilePreview/ProfilePreviewContainer';
import { fetchTracksIfNeeded, fetchProfileIfNeeded } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../components/Loader/Loader';

class Home extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchTracksIfNeeded();
        this.props.fetchProfileIfNeeded();
    }

    render () {
        return (
            <Fragment>
                <Header>
                    <Search />
                    <Sorter />
                    <ProfilePreview />
                </Header>
                {
                    this.props.showLoader ?
                        <Loader /> :
                        <TableContainer headings={
                            ['', 'Title', 'Artist', 'Length', 'Audio']
                        }/>
                }
            </Fragment>
        )
            
    }
}

const mapStateToProps = state => ({
    showLoader: state.redirect || !state.tracks.tracksReceived || state.tracks.isFetching || state.profile.isFetching,
    tracks: state.tracks.tracks
})

const mapDispatchToProps = dispatch => bindActionCreators({ fetchTracksIfNeeded, fetchProfileIfNeeded }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home); 