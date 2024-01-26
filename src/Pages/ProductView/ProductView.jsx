
import { useParams } from 'react-router-dom';
import './ProductView.css';
import { getItemByProductNumber } from '../../helpers/getItemByProductNumber';

export const ProductView = () => {
  
  const { productNumber } = useParams();


  

  const item = getItemByProductNumber( productNumber );


  return (
    <>
          <section className='product-view section'>
              <div className="container grid">

                <div className="product-image-container">
                  <img src={`/assets/${ item.genre }/${ item.productName }.jpg`} alt={item.description} />
                </div>

                <div className="product-information-wrapper">
                  <h3 className="product-title">{item.description}</h3>
                  <p className="product-price">$ {(item.price).toFixed(2)} USD</p>
                  <div className="line-price"></div>
                </div>
              </div>
          </section>
    </>
  )
}
