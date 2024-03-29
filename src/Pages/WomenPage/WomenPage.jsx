import { ScrollRestoration} from 'react-router-dom';
import { CategoryProduct } from "../../UI/components/CategoryProduct/CategoryProduct"
import { getItemsByGenre } from "../../helpers/getItemsByGenre"
import heroImage from '/assets/hero-women.jpg';
import { Features } from '../../UI/components/Features/Features';
import "./WomenPage.css";
import { getCategories } from '../../helpers/getCategories';
import { LazyBackgroundImg } from '../../UI/components/LazyBackgroundImg/LazyBackgroundImg';

export const WomenPage = () => {

  const itemsList = getItemsByGenre('women');
  const arrayOfCategories = getCategories('women');
  const filterItems = ( itemsList = [] , name = '', value = '' ) => {
      if ( name === "All" || value === "All" ) {
        return itemsList
      }else{
       return itemsList.filter( item => item.category === name || item.category === value  );
      }
  }
  
  return (
    <>

    <LazyBackgroundImg imgUrl={ heroImage } cssClass='hero-women'>
        <article className='hero-content container flex'>
              <h1 className='text-center'>Women Collection</h1>
              <div className="underline-title"></div>
              <p className='sm text-center'>Mid-Season SALE only at Olea</p>
          </article>
          <div className="overlay-hero"></div>
    </LazyBackgroundImg>

        
        <CategoryProduct 
          itemsList = { itemsList } 
          arrayOfCategories={ arrayOfCategories }
          filterItems={ filterItems }
        />
        
        <Features/>

        <ScrollRestoration/>
    </>
  )
}
