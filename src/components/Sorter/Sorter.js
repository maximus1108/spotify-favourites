import React, { Fragment } from 'react';

export default ({
    sortByPriceAscending,
    sortByPriceDescending,
    sortByName
}) => {

    const onSelectChange = e => {
        const { value } = e.target;
        if(value === 'price-ascending')
            sortByPriceAscending();
        else if(value === 'price-descending')
            sortByPriceDescending();
        else if (value === 'name')
            sortByName()
    }

    return (
        <Fragment>
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" style={{ margin: "20px" }} onChange={onSelectChange}>
                <option defaultValue> no sort selected</option>
                <option value="price-ascending">Price Ascending</option>
                <option value="price-descending">Price Descending</option>
                <option value="name">Name</option>
            </select>
        </Fragment>
    );
}