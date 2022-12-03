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
                    <Link to={`/detail/${info.id}`}>
                    <img src={info.image} className="cart-item-image" alt=""/>
                    <p className="cart-item-title">{info.title}</p>
                    <p className="cart-item-title">${info.price}ARS</p>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Item;