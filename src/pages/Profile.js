import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchProfileIfNeeded } from '../actions'
import { bindActionCreators } from 'redux';


class Profile extends Component {

    componentDidMount() {
        this.props.fetchProfileIfNeeded();
    }

    render () {
        const {
            name,
            email,
            img,
            followers,
            country
        } = this.props;

        return (
            <Fragment>
                <Header>
                    <Link to='/' className='return-btn'>
                        Return
                    </Link>
                </Header>
                <div className='profile-info'>
                    <img className="profile-info__img" src={ img } />
                    <div>
                        <h1 className='profile-info__name'>{ name }</h1>
                        <span>
                            <strong>Country:</strong>{ country }
                        </span>
                        <span>
                            <strong>Email:</strong>{ email }
                        </span>
                        <span>
                            <strong>Followers:</strong> { followers }
                        </span>
                    </div>
                </div>            
            </Fragment>
        )
    }
};

const mapStateToProps = state => state.profile.profileInfo;

const mapDispatchToProps = dispatch => bindActionCreators({ fetchProfileIfNeeded }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);