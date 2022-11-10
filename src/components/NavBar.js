import "./NavBarStyles.css";
import logo from '../images/logo.png';
import Carrito from './CartWidget.js';
import { NavLink } from 'react-router-dom';


function Navbar(){
    return (
        <>
            <nav>
                <div>
                    <img src={logo} className='logo-nav'  alt="logo"></img> 
                </div>
                <p className="navTitle">MUNDO FUNKO</p>
                <div>
                <ul id="navbar">
                    <li><NavLink className="active" to='/'>Inicio</NavLink></li>
                    <li><NavLink to={'/category/nacionales'} >Nacionales</NavLink></li>
                    <li><NavLink to={'/category/importados'} >Importados</NavLink></li>
                    <li><NavLink to={'/cart'} >MiCompra</NavLink></li>
                </ul>
            </div>

            <div className='carritoCompra'>
                <Carrito/>
            </div>
            </nav>
        </>
    )
}

export default Navbar;