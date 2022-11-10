import './itemDetail.css';

import React, {useState} from 'react';

import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);


    const onAdd = (quantity) => {
       setGoToCart(true);
    }

   return(
    <div className="container">
    <div className="detail">

        <img className='detail__image' src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
               {
                
                    goToCart 
                    ? <Link to='/cart'>Finalizar compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
               } 
            </div>
    </div>
</div>

   ); 
}

export default ItemDetail;