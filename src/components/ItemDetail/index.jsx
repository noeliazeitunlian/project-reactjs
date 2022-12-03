import './itemDetail.css';

import React, {useState} from 'react';
import { useCartContext } from '../../context/CartContext';

import ItemCount from '../ItemCount';
import {Link} from 'react-router-dom';

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();


    const onAdd = (quantity) => {
       setGoToCart(true);
       addProduct(data, quantity);
    }

   return(
    <div className="container">
    <div className="detail">

        <img className='detail__image' src={data.image} alt="" />
            <div className="content">
                
                <h1 className="detail-title animate__animated animate__bounce" >{data.title}</h1>
                <h1 className="detail-description" >{data.description}</h1>
               {
                
                    goToCart 
                    ? <Link to='/cart' className="btn-finalizar">Finalizar compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
               } 
            </div>
    </div>
</div>

   ); 
}

export default ItemDetail;