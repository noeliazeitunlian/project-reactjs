import Item from '../Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return (
        data.map(product => <Item key={product.id} info={product} />) // genero un item por cada funko 
    );
}

export default ItemList;