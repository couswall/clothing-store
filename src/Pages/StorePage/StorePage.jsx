import { useMemo, useState } from 'react';
import { ScrollRestoration } from "react-router-dom";
import { items } from '../../data/data';
import { Item } from '../../UI/components/Item/Item';
import './StorePage.css';

export const StorePage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [ currentCategory, setCurrentCategory ] = useState('All');
  const [itemsList, setItemsList] = useState( items );
  const [arrayOfCategories, setArrayOfCategories] = useState(["All", "Women", "Men"]);
  const [animateHeroContent, setAnimateHeroContent] = useState(false);

  const indexOfLastItem = currentPage * 6;
  const indexOfFirstItem = indexOfLastItem - 6; 

  const totalPages = useMemo( () => Math.ceil( itemsList.length / 6 ), [ itemsList ]);


  // getItemsByCategory 
   const getItemsByCategory = async (e) => {

    const { name, value } = e.currentTarget;

    setCurrentCategory( name );
    setAnimateHeroContent(true);
    setCurrentPage( 1 );
    
    if ( name === "All" || value === "All" ) {
        setItemsList( items );
    }else{
        const itemsByCatergory = items.filter( item => item.genre === name.toLowerCase() || item.genre === value.toLowerCase() );
        setItemsList( itemsByCatergory );
    }

    await new Promise( r => setTimeout(r, 500));

    setAnimateHeroContent( false )

  }

  // Pagination function 
  //Next Pagination 
  const onHandleNextPage = () => {
    if ( currentPage === totalPages  ) return;
    setCurrentPage( currentPage + 1 );
  }

  const onHandlePreviousPage = () => {
    if ( currentPage === 1 ) return;
    setCurrentPage ( currentPage - 1 );
  }


  return (
    <>
        {/* <section 
            className="hero-store section"
            style={{
                backgroundImage: `url(${heroContactImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
        }}  
            >
            <article className='hero-content container flex'>
                <h1 className='text-center'>Contact us</h1>
                <div className="underline-title"></div>
            </article>
            <div className="overlay-hero"></div>
        </section> */}
        
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
                                ( itemsList.slice(indexOfFirstItem, indexOfLastItem ) ).map( item => (
                                    <Item item = { item } key={ item.productNumber }/>
                                ))
                            }
                    </div>
                </div>

                    <div className='pagintation-btns-wrapper flex'>
                      <button 
                        className={`btn btn-secondary ${ (currentPage === 1 ) ? 'disabled' : ''}`} 
                        onClick={() => onHandlePreviousPage() }
                        disabled = { currentPage === 1 }
                        >
                          Previous
                      </button>
                      
                      <button 
                        className={`btn btn-secondary ${ (currentPage === totalPages) ? 'disabled' : ''}`} 
                        onClick={( ) => onHandleNextPage() }
                        disabled = { currentPage === totalPages }
                        >
                          Next
                      </button>
                    </div>
            </div>
        </section>


        <ScrollRestoration/>
    </>
  )
}
