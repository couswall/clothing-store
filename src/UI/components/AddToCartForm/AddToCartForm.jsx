import { useContext, useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { CartContext } from "../../../context";

import './AddToCartForm.css';



export const AddToCartForm = ({ item }) => {

    const { onAddItem, setShowCart } = useContext( CartContext );
    const [addToCart, setAddToCart] = useState(false);

    const { size: sizes, price } = item;

    const { quantity, size: formSize , onInputChange, onResetForm } = useForm({
        quantity: 1,
        size: ''
    });


    // Submit Form - Add To Cart Function
    const onSubmitForm = async (e) => {
        e.preventDefault();
        onAddItem( { ...item, size: formSize, quantity: parseInt(quantity), currentPrice: price * parseInt(quantity )} );
        setAddToCart(true);
        
        await new Promise( r => setTimeout(r, 1000));
        
        setAddToCart(false);
        setShowCart( true );

    }

    useEffect( () => {
        onResetForm();
    }, [ item ])

    
  return (
    <form className="form-add-to-cart" onSubmit={ onSubmitForm }>
                    
            <label>Size:</label>
            <select 
                name="size"  
                required
                value={ formSize }
                onChange={ onInputChange }
            >
                <option value={""} hidden>Select size</option>
                {
                    sizes.map( size => (
                        <option key={ size } value={size}>{ size }</option>
                    ))
                }
            </select>

            <label>Quantity:</label>
            <input 
                className="quantity" 
                type="number" 
                min={1} 
                name="quantity"
                value={ quantity }
                onChange={ onInputChange }
                required
            />

            <button 
                className= {`btn btn-primary ${ ( addToCart ) ? 'adding-to-cart' : ''}`}
                type="submit"
                disabled = { addToCart }
            >
                {
                    ( addToCart ) 
                        ? 'ADDING TO CART...'
                        : 'ADD TO CART'
                }
            </button>
    </form> 
  )
}
