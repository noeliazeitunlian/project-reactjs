import "./NavBarStyles.css";
import logo from '../images/logo2.png';
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';


function Navbar(){
    return (
        <>
            <nav>
                <div>
                    <img src={logo} className='logo-nav'  alt="logo"></img>
                </div>

                <div>
                    <p className="navTitle">MUNDO FUNKO</p>
                </div>
                
                <div>
                <ul id="navbar">
                    <li>
                        <NavLink className="active" to='/'>Inicio</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/category/nacionales'} >Nacionales</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/category/importados'} >Importados</NavLink>
                    </li>
                    
                    <li><NavLink to={'cart'}> <CartWidget/> </NavLink>
                    </li>
                </ul>
            </div>

            </nav>
        </>
    )
}

export default Navbar;