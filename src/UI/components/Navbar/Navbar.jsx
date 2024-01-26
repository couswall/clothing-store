import { useContext, useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Navbar.css';
import { Cart } from "../Cart/Cart";
import { CartContext } from "../../../context";

export const Navbar = () => {

    const { showCart, setShowCart, cart } = useContext( CartContext );
    const [ isNavBarActive, setIsNavBarActive ] = useState(false);
    const [ quantityCart, setQuantityCart ] = useState(0);
    
    const calculateCartItems = () => {
        const updatedQuantityItems = ( cart.map( items => items.quantity ) ).reduce( ( a,b ) => a + b, 0);
        
        setQuantityCart( updatedQuantityItems );
    }

    useEffect( () => {
        calculateCartItems();
    }, [ cart ])

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

                <div className="icons-nav-container flex">
                   <FaSearch  className="navbar-icon" />

                   <button className="navbar-icon cart-button" onClick={() => setShowCart(!showCart)}>
                        <FaCartShopping className="cart-icon"/>
                        <span className="cart-quantity">{quantityCart}</span>
                   </button>
                   
                   <FaBars 
                        className="navbar-icon burger-icon"  
                        onClick={() => { setIsNavBarActive(!isNavBarActive) }}
                    />
                
                </div>
            </div>
        </header>

        {
           ( showCart ) && <Cart/>
        }

        
    </>
  )
}
