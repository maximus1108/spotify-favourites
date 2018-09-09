import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Profile = ({
    name,
    email,
    img,
    followers,
    country
}) => (
    <Fragment>
        <Header>
            <Link to='/' className='return-btn'>
                Return
            </Link>
        </Header>
        <div className='profile-info'>
            <img className="profile-info__img" src={ img } />
            <p>
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
            </p>
        </div>
        
    </Fragment>
);

const mapStateToProps = state => state.profile.profileInfo;

export default connect(mapStateToProps)(Profile);