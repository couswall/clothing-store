import { ScrollRestoration} from 'react-router-dom';
import { CategoryProduct } from '../../UI/components/CategoryProduct/CategoryProduct'
import { items } from '../../data/data'
import heroImage from '/assets/accesories-hero-image.jpg';
import './AccesoriesPage.css'

export const AccesoriesPage = () => {

    const itemList = items.filter( item => item.category === 'Accesories' ); 
    const arrayOfCategories = ["All", "Women", "Men"];
   
    const filterItems = ( itemsList = [] , name = '', value = '' ) => {
        if ( name === "All" || value === "All" ) {
          return itemsList
        }else{
         return itemsList.filter(  item => item.genre === name.toLowerCase() || item.genre === value.toLowerCase()  );
        }
    }

  return (
    <>
        <section 
                className="hero-store section"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
            }}  
                >
                <article className='hero-content container flex'>
                    <h1 className='text-center'>Accesories</h1>
                    <div className="underline-title"></div>
                </article>
                <div className="overlay-hero"></div>
            </section>

        <CategoryProduct 
            itemsList={ itemList }
            arrayOfCategories={ arrayOfCategories }
            filterItems={ filterItems }
        />

        <ScrollRestoration/>
    </>
    )
}
