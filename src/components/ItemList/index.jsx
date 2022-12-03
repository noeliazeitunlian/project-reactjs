import Item from '../Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return (
        <div className="contenedor-card">        
            {data.map(product => <Item key={product.id} info={product} />)
            }
        </div>
    );
}

export default ItemList;