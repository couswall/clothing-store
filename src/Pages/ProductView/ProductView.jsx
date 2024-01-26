import { AddToCartForm } from '../../UI/components';

import { ScrollRestoration, useParams } from 'react-router-dom';
import './ProductView.css';
import { getItemByProductNumber } from '../../helpers/getItemByProductNumber';

export const ProductView = () => {
  
  const { productNumber } = useParams();


  

  const item = getItemByProductNumber( productNumber );


  return (
    <>
          <section className='product-view section'>
              <div className="container">
                <div className="product-wrapper grid">
                  <div className="product-image-container">
                    <img src={`/assets/${ item.genre }/${ item.productName }.jpg`} alt={item.description} />
                  </div>

                  <div className="product-information-wrapper">
                    <h2 className="product-title">{item.description}</h2>
                    <p className="product-price">$ {(item.price).toFixed(2)} USD</p>
                    <div className="line-price"></div>
                    <p className="product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, maiores nostrum! Molestias perspiciatis atque deserunt?.</p>

                  
                  {
                    <AddToCartForm item={ item }/>
                  }
                  </div>
                </div>
                
              </div>
          </section>
                  
          <section className='faq-product-section section'>
            <div className="container">
                  
            </div>
          </section>
        
        
        <ScrollRestoration/>
    </>
  )
}
