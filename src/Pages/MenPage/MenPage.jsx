import { ScrollRestoration} from 'react-router-dom';
import heroImage from '/assets/hero-men-page.jpg';
import { getItemsByGenre, getCategories } from '../../helpers';
import { CategoryProduct } from '../../UI/components/CategoryProduct/CategoryProduct';
import './MenPage.css';
import { Features } from '../../UI/components/Features/Features';
import { LazyBackgroundImg } from '../../UI/components/LazyBackgroundImg/LazyBackgroundImg';

export const MenPage = () => {

  const itemsList = getItemsByGenre('men');
  const arrayOfCategories = getCategories('men');
  const filterItems = ( itemsList = [] , name = '', value = '' ) => {
      if ( name === "All" || value === "All" ) {
        return itemsList
      }else{
       return itemsList.filter( item => item.category === name || item.category === value  );
      }
  }

  return (
    <>
        <LazyBackgroundImg imgUrl={ heroImage } cssClass='hero-men'>
            <article className='hero-content container flex'>
              <h1 className='text-center'>Men Collection</h1>
              <div className="underline-title"></div>
              <p className='sm text-center'>Mid-Season SALE only at Olea</p>
            </article>
        <div className="overlay-hero"></div>
        </LazyBackgroundImg>

        {/* <section className='hero-men'
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
          
        </section> */}

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
