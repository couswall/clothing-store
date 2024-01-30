import { useState } from 'react';
import { getCategories } from '../../../helpers/getCategories';
import './CategoryProduct.css'
import { Item } from '../Item/Item';

export const CategoryProduct = ({itemsList}) => {

    const [ currentCategory, setCurrentCategory ] = useState('All');
    const [items, setItems] = useState( itemsList );
    const arrayOfCategories = getCategories( 'women' );
    const [animateHeroContent, setAnimateHeroContent] = useState(false);


    // getItemsByCategory 
    const getItemsByCategory = async (e) => {

        const { name, value } = e.currentTarget;
        setCurrentCategory( name );
        setAnimateHeroContent(true);
        
        if ( name === "All" || value === "All" ) {
            setItems( itemsList );
        }else{
            const itemsByCatergory = itemsList.filter( item => item.category === name || item.category === value  );
            setItems( itemsByCatergory );
        }

        await new Promise( r => setTimeout(r, 500));


        setAnimateHeroContent( false )
    }


  return (
    
        <section className="categories-product-section section">
            <div className="container">

                

                <div className="categories-filter-wrapper grid">
                    
                    <select 
                        className='filter-category-select'
                        onChange={ getItemsByCategory }
                    >
                        {
                            arrayOfCategories.map( category => (
                                <option value={ category } key={ category }>{ category }</option>
                            ))
                        }
                    </select>

                    <div className="categories-filter">
                        <ul>
                            {
                                arrayOfCategories.map( category => (
                                    <li key={ category }>
                                        <button 
                                            className={`category-btn btn ${ ( currentCategory === category) ? 'active' : ''}`}
                                            name= {category}
                                            onClick={ getItemsByCategory }
                                        > 
                                            { category } 
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={`items-container-categories grid ${animateHeroContent ? 'animate__animated animate__fadeIn' : ''}`}>
                            
                            {
                                items.map( item => (
                                    <Item item = { item } key={ item.productNumber }/>
                                ))
                            }
                            
                    </div>
                </div>
            </div>
        </section>
    
  )
}
