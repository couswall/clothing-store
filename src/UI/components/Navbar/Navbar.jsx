import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Navbar.css';
import { Cart } from "../Cart/Cart";

export const Navbar = () => {

    const [ isNavBarActive, setIsNavBarActive ] = useState(false);
    const [showCart, setShowCart] = useState(false);

    const onHandleNavbar = () => {
        if ( !isNavBarActive ) return;
        setIsNavBarActive(!isNavBarActive);
    }


  return (
    <>
        <header className="navbar">
            <div className="container flex">
                
                <Link to={"/"} className="brand-logo" onClick={onHandleNavbar}>
                    <h1>Dollek</h1>
                </Link>

                <nav className={` ${ (isNavBarActive ) ? 'active' : ''  }`}>
                    <ul>
                        <li>
                            <Link to={'/'} onClick={onHandleNavbar}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/store'} onClick={onHandleNavbar}>Store</Link></li>
                        <li>
                            <Link to={"/about"} onClick={onHandleNavbar}>About</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} onClick={onHandleNavbar} >Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="icons-nav-container">
                   <FaSearch  className="navbar-icon" />
                   <FaCartShopping 
                        className="navbar-icon"
                        onClick={() => setShowCart(!showCart)}
                    />
                   <FaBars 
                        className="navbar-icon burger-icon"
                        onClick={() => { setIsNavBarActive(!isNavBarActive) }}
                    />
                </div>
            </div>
        </header>

        {
           ( showCart ) && <Cart showCart = { showCart } setShowCart= { setShowCart }/>
        }

        
    </>
  )
}
