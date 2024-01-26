import { IoCloseSharp } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import './Cart.css';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

export const Cart = () => {

  const { cart, onDeleteItem, showCart, setShowCart } = useContext( CartContext );
  const [ total, setTotal ] = useState(0);

  const [ animationCart, setAnimationCart ] = useState('animate__fadeInRight animate__faster');
  const [ animationOverlay, setAnimationOverlay] = useState('animate__fadeIn animate__faster');


  const onHandleDelte = (e) => {
    const id = parseInt(e.target.name);
    const size = e.currentTarget.getAttribute("data-size");

    onDeleteItem({ id , size });
  }
  
  const calcualteTotal = () => {
    const subTotal = ( cart.map( item => item.currentPrice ) ).reduce( (a ,b ) => a + b, 0);
    setTotal( subTotal );
  }
  
  useEffect(() => {
    calcualteTotal();
  }, cart )

  // Hide Cart animation
  const hide = async (ms) => {
      setAnimationCart('animate__fadeOutRight animate__faster');
      setAnimationOverlay('animate__fadeOut animate__faster');

      await new Promise( r => setTimeout(r, ms));

      setShowCart( !showCart );
  }

  return (
    <>
      {
        ( showCart ) && 
            <div className="cart-wrapper"> 
              <div className= {`overlay-cart animate__animated ${ animationOverlay }`}  onClick={() => hide(400) }></div>
                <section className= {`cart-section animate__animated ${ animationCart }`}>
                    
                <div className="cart-header flex">
                      <h3>Your Cart</h3>
                      <button className="btn-close-cart btn flex" onClick={() => hide(400) }>
                        <IoCloseSharp/>
                      </button>    
                </div>

                    {

                      ( cart.length !== 0 )
                              ? <>
                                <div className="items-wrapper">
                                  {
                                    cart.map( item => (
                                      <article key={ item.id + item.size } className="cart-item">
                                          <div className="img-container-cart">
                                              <img src={`./assets/${ item.genre }/${ item.productName }.jpg`} alt={ item.description } />
                                          </div>

                                          <div className="info-item-cart">
                                              <h5 className="title-item-cart">{ item.description }</h5>
                                              <p className="item-price-cart">${ (item.price).toFixed(2) } USD</p>
                                              <div className="additional-info-container">
                                                <p className="additional-info">Size: { item.size }</p>
                                                <p className="additional-info">Quantity: { item.quantity }</p>
                                                <p className="additional-info">Total: ${ item.currentPrice }</p>
                                              </div>
                                      
                                          </div> 

                                          <button 
                                            className="trash-icon-cart btn"
                                            name= { item.id }
                                            data-size = { item.size }
                                            onClick={ onHandleDelte }
                                          >
                                            <FaTrashCan className="icon-trash"/>
                                          </button>

                                      </article>
                                    ) )
                                  }

                                  </div>

                                  <div className="checkout">
                                    <div className="subtotal flex">
                                      <h6>Subtotal:</h6>
                                      <p>$ { total.toFixed(2) } USD</p>
                                    </div>

                                    <button className="checkout-btn btn btn-primary">CONTINUE TO CHECKOUT</button>
                                  </div>
                                </>
                              
                              : <div className="empty-cart-wrapper flex"><p>Your cart is empty</p></div>

                    }

                </section>
            </div>
      }
    </>
  )
}
