import { IoCloseSharp } from "react-icons/io5";
import './QuickView.css'
import { AddToCartForm } from "../AddToCartForm/AddToCartForm";

export const QuickView = ({ item, setShowQuickView }) => {

    
    const { productName, description, genre, price } = item;


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
                    <img src={`/assets/${ genre }/${ productName }.jpg`} alt={ description } loading="lazy"/>
                </div>
            </div>
            <div className="quick-view-info">
                <h4 className="quick-title">{description}</h4>
                <p className="quick-price">$ {(price).toFixed(2)} USD</p>
                <div className="line-price"></div>
                <p className="quick-product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, maiores nostrum! Molestias perspiciatis atque deserunt?.</p>

                {
                    <AddToCartForm item =  { item }/>
                }

            </div>
        </div>
        <div className="overlay-quick-view"></div>
    </div>
  )
}
