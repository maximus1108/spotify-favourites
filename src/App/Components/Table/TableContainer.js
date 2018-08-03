import { connect } from 'react-redux';
import Table from './Table';
import React from 'react';

const getSortedProducts = (products, sorter) => {
    switch(sorter) {
        case 'PRICE_ASCENDING':
            return [].concat(products).sort((a,b) => a.offer.price - b.offer.price)
        case 'PRICE_DESCENDING':
            return [].concat(products).sort((a,b) => b.offer.price - a.offer.price)
        case 'NAME':
            return [].concat(products).sort((a,b) => {
                if(a.offer.name < b.offer.name) return -1;
                if(a.offer.name > b.offer.name) return 1;
                return 0;
            })
        default:
            return products
    }
}

const mapToTableRows = products => products.map(product =>
    [
        <img src={ product.merchant.logo_url } />,
        product.merchant.name,
        product.offer.name,
        product.offer.price,
        <a href={ product.offer.link }>Go to product</a>
    ]
)

const mapStateToProps = (state) => ({
    data: mapToTableRows(getSortedProducts(state.products, state.sortBy))
})
export default connect(mapStateToProps)(Table)