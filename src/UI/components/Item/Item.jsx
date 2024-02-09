import { Link } from "react-router-dom";
import './Item.css'

export const Item = ({item}) => {
  return (
    <Link to={`/product/${ item.productNumber }`}>
        <article className='item-container flex'>
            <div className="img-container">
                <img loading="lazy" src={`/assets/${ item.genre }/${ item.productName }.jpg`} alt={ item.description } />
                <div className="overlay-product"></div>
            </div>

            <div className="item-information text-center">
                <h4 className='item-name'>{ item.description }</h4>
                <p className='price '>${ (item.price).toFixed(2) } USD</p>
            </div>
        </article>
    </Link>
  )
}
