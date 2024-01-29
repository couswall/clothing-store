import { AddToCartForm, Carousel, Features } from '../../UI/components';

import { ScrollRestoration, useParams } from 'react-router-dom';
import './ProductView.css';
import { getItemByProductNumber } from '../../helpers/getItemByProductNumber';
import { useEffect, useMemo, useState } from 'react';
import { getRecommendations } from '../../helpers';

export const ProductView = () => {
  
  const { productNumber } = useParams();

  const [ faqOption, setFaqOption ] = useState( false );

  const item = useMemo( () => getItemByProductNumber( productNumber ), [ productNumber ]);

  const recommendations = useMemo( () => getRecommendations( item.id, item.genre ), [ productNumber ]);


  return (
    <>
          <section className='product-view section'>
              <div className="container">
                <div className="product-wrapper grid">
                  
                  <div className="product-image-container animate__animated animate__fadeIn">
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
                  <div className="faq-wrapper">
                    <div className="faq-header">
                      <button className= {`btn ${ ( !faqOption ) ? 'active' : ''}`} onClick={ () => setFaqOption( false )}>Details & Specs</button>
                      <button className={`btn ${ ( faqOption ) ? 'active' : ''}`} onClick={ () => setFaqOption( true)}>Faq</button>
                    </div>

                    <div className={`details-content animate__animated animate__fadeIn animate__faster`}
                         style={{ display: ( !faqOption ) ? '' : 'none'}} 
                    >
                        <h3>Best Product 2019</h3>
                            <p>
                            As seen on Techcrunch, Engadget and many more...!‍ <br/><br/>
                            A shared love for good design, outdoor adventure and a home base in the state of Oregon fueled the desire for us to work together with Salomon on the Super 8 Snowboard and Chapter collaboration. What began as preliminary notes from a call to meld shared values and likeminded interest soon transformed into a limited edition version of the knife that started it all.
                            </p>
                            <h4>Features</h4>
                              <ul>
                                <li>World class materials</li>
                                <li>Great looking product</li>
                                <li>Designed in USA</li>
                              </ul>
                            <p>When you buy this product you are supporting hard working families.</p>
                      </div> 

                      <div className={`faq-content animate__animated animate__fadeIn animate__faster`}
                          style={{ display: ( faqOption ) ? '' : 'none'}}
                      >
                          <p><b>Q:</b> Here goes your question?</p> 
                          <p><b>A:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic molestias maiores eligendi delectus esse.</p> 
                          <p><b>Q:</b> Here goes your question?</p> 
                          <p><b>A:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic molestias maiores eligendi delectus esse.</p> 
                          <p><b>Q:</b> Here goes your question?</p> 
                          <p><b>A:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic molestias maiores eligendi delectus esse.</p> 
                      </div>

                  </div>
            </div>
          </section>

          <Carousel title={'Others Also Bought'} listItems={ recommendations }/>
          <Features/>


        
        
        <ScrollRestoration/>
    </>
  )
}
