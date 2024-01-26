import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import './QuickView.css'
import { CartContext } from "../../../context";
import { useForm } from "../../../hooks/useForm";

export const QuickView = ({ item, setShowQuickView }) => {

    const { onAddItem } = useContext( CartContext );
    const { quantity, size: formSize , onInputChange, onResetForm } = useForm({
        quantity: 1,
        size: ''
    })
    
    const { id, productName, productNumber, description, genre, price, size: sizes, } = item;


    const onSubmitForm = (e) => {
        e.preventDefault();
        onAddItem( { ...item, size: formSize, quantity: parseInt(quantity), currentPrice: price * parseInt(quantity )} );
    }

  return (
    <div className='quick-view-wrapper flex'>

        <div className="product-view-container grid">
            <button 
                className="close-quick-view" 
                onClick={() => setShowQuickView(false)}
            >
            
                <IoCloseSharp className="close-icon-quick-view"/>
            </button>
            <div className="quick-img flex">
                <div className="quick-img-container">
                    <img src={`./assets/${ genre }/${ productName }.jpg`} alt={ description } />
                </div>
            </div>
            <div className="quick-view-info">
                <h4 className="quick-title">{description}</h4>
                <p className="quick-price">$ {(price).toFixed(2)} USD</p>
                <div className="line-price"></div>
                <p className="quick-product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, maiores nostrum! Molestias perspiciatis atque deserunt?.</p>


                <form className="form-quick-view" onSubmit={ onSubmitForm }>
                    
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
                    />

                    <button 
                        className="btn btn-primary"
                        type="submit"
                    >
                        Add to cart
                    </button>
                </form>    

            </div>
        </div>
        <div className="overlay-quick-view"></div>
    </div>
  )
}
