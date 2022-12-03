import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './cart.css';
import gif from '../../images/gif.gif'
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {

    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Noe',
            email: 'noelia@gmail.com',
            phone:12345,
            address: 'callefalsa123'
        },

        items: cart.map(product => ({ id: product.id, title:product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }


    const handleClick = () => {
        const db= getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }


    if(cart.length === 0){
        return (
            <>
                <p className="sin-productos">UPS! No hay elementos en el carrito</p>
                <div className="gif-content"> 
                    <img src={gif} className="gif-cart animate__animated animate__fadeIn"  alt="imagen de spiderman"></img>              
                </div>
                <div className="btn-cart-content">     
                    <Link to='/' className="btn-sinItems animate__animated animate__fadeIn">Comenzar compra!</Link>
                </div>
            </>
        );
    }

    return (

        <>
            {cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p className="total-itemCart">
            Total: ${totalPrice()}
        </p>
        <div className="btn-cart-content">
            <button className="btn-comprar" onClick={handleClick}>COMPRAR</button>
        </div>
        </>
    )
}

export default Cart