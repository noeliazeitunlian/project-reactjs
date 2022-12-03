import "./NavBarStyles.css";
import logo from '../images/logo2.png';
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';


function Navbar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div>
                    <img src={logo} className='logo-nav'  alt="logo"></img>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon bg-light"></span>
                </button>
                <div className="content-navTitle">
                    <p className="navTitle">MUNDO FUNKO</p>
                </div>
                
                <div className="collapse navbar-collapse" id="navbarNav">
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