import { useCart } from "../hooks/useCart"
import { CartContext } from "./CartContext"



export const CartProvider = ({ children }) => {
  
    const { cart, onAddItem, onDeleteItem } = useCart();
  
    return (
    
    <CartContext.Provider value={{ cart,  onAddItem, onDeleteItem }}>
        { children }
    </CartContext.Provider>
    

  )
}
