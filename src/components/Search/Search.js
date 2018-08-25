import React from 'react';

export default ({
    updateSearch
}) => (
    <form>
        <input type="text" placeholder="Search" onChange={e => updateSearch(e.target.value) }/>
    </form>
);