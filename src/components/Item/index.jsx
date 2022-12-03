import './item.css';
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import {CartContext } from "../../context/CartContext";


const Item = ({info}) => {

    const nombre = useContext(CartContext);
    console.log('Item: ', nombre);


    return (
        <div>
            <div className= "containerCard">
                <div className= "card-content">
                    
                    <img src={info.image} className="cart-item-image" alt=""/>
                    <p className="cart-item-title">{info.title}</p>
                    <p className="cart-item-title">${info.price} USD</p>
                    <Link to={`/detail/${info.id}`} className="btn-verDetalle animate__animated animate__fadeIn">
                        Ver detalle <i class="bi bi-cart"></i></Link>
                </div>
            </div>
        </div>

        
    );
}

export default Item;