import './styles.css';
import React from 'react';
import Cart from './components/Cart';
import "./components/NavBarStyles.css";
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';
import Footer from './components/footer/footer';


export const CartContext = React.createContext('');
console.log('CartContext: ', CartContext);

export default function App(){
    return (
       <div className="App">
        <BrowserRouter>
            
            <CartProvider>
             <Navbar/>
             <Routes>
                <Route path= '/' element={<ItemListContainer />} />
                <Route path= '/category/:categoriaId' element={<ItemListContainer />} />
                <Route path= '/cart' element={<Cart />} />
                <Route path= '/detail/:detailId' element={<ItemDetailContainer />} />
            </Routes>
            </CartProvider>

            <Footer/>

        </BrowserRouter>
       
       </div>
    )
}