import { ScrollRestoration} from 'react-router-dom';
import { CategoryProduct } from '../../UI/components/CategoryProduct/CategoryProduct'
import { items } from '../../data/data'
import heroImage from '/assets/accesories-hero-image.jpg';
import './AccesoriesPage.css'
import { Features } from '../../UI/components/Features/Features';
import { LazyBackgroundImg } from '../../UI/components/LazyBackgroundImg/LazyBackgroundImg';

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
        <LazyBackgroundImg imgUrl={heroImage} cssClass='hero-accesories'>
            <article className='hero-content container flex'>
                <h1 className='text-center'>Accesories</h1>
                <div className="underline-title"></div>
            </article>
            <div className="overlay-hero"></div>
        </LazyBackgroundImg>


        <CategoryProduct 
            itemsList={ itemList }
            arrayOfCategories={ arrayOfCategories }
            filterItems={ filterItems }
        />

        <Features/>
        <ScrollRestoration/>
    </>
    )
}
