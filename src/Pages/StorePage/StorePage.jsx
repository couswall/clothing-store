
import { useState } from 'react';
import './StorePage.css';

export const StorePage = () => {

  const [ currentCategory, setCurrentCategory ] = useState('All');
  const [arrayOfCategories, setArrayOfCategories] = useState(["all", "women", "men"]);
  const [animateHeroContent, setAnimateHeroContent] = useState(false);

  return (
    <>
        <section className="categories-product-section section">
            <div className="container">

                

                <div className="categories-filter-wrapper grid">
                    
                    <select 
                        className='filter-category-select'
                        // onChange={ getItemsByCategory }
                    >
                        {/* {
                            arrayOfCategories.map( category => (
                                <option value={ category } key={ category }>{ category }</option>
                            ))
                        } */}
                    </select>

                    <div className="categories-filter">
                        <ul>
                            {
                                arrayOfCategories.map( category => (
                                    <li key={ category }>
                                        <button 
                                            className={`category-btn btn ${ ( currentCategory === category) ? 'active' : ''}`}
                                            name= {category}
                                            // onClick={ getItemsByCategory }
                                        > 
                                            { category } 
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={`items-container-categories grid ${animateHeroContent ? 'animate__animated animate__fadeIn' : ''}`}>
                            
                            {/* {
                                items.map( item => (
                                    <Item item = { item } key={ item.productNumber }/>
                                ))
                            } */}
                            
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
