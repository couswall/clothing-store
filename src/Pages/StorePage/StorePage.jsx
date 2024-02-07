import { useMemo, useState } from 'react';
import './StorePage.css';
import { items } from '../../data/data';
import { Item } from '../../UI/components/Item/Item';

export const StorePage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [ currentCategory, setCurrentCategory ] = useState('All');
  const [itemsList, setItemsList] = useState( items );
  const [arrayOfCategories, setArrayOfCategories] = useState(["All", "women", "men"]);
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
                    
                    <div>
                      <button 
                        className='btn btn-secondary' 
                        onClick={() => onHandlePreviousPage() }
                        disabled = { currentPage === 1 }
                        >
                          Previous
                      </button>
                      
                      <button 
                        className='btn btn-secondary' 
                        onClick={( ) => onHandleNextPage() }
                        disabled = { currentPage === totalPages }
                        >
                          Next
                      </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
