import React from 'react';
import Search from '../Search/SearchContainer';
import Sorter from '../Sorter/SorterContainer';
import ProfilePreview from '../ProfilePreview/ProfilePreviewContainer'

export default () => (
    <header>
        <Search />
        <Sorter />
        <ProfilePreview />
    </header>
)