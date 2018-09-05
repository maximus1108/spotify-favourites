import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePreview = ({
    name,
    img
}) => (
    <Link to="/profile" className="profile-preview">
        <span className="profile-preview__name">{ name }</span>
        <img className="profile-preview__img" src={ img }/>
    </Link>
);

export default ProfilePreview;