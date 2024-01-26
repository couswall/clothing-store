import { useState } from "react";
import { useCart } from "../hooks/useCart"
import { CartContext } from "./CartContext"



export const CartProvider = ({ children }) => {
  
    const { cart, onAddItem, onDeleteItem } = useCart();

    // showCart 
    const [showCart, setShowCart] = useState(false);
  
    return (
    
    <CartContext.Provider value={{ cart, onAddItem, onDeleteItem, showCart, setShowCart }}> 
        { children }
    </CartContext.Provider>
    

  )
}
