import { Carousel } from '../../UI/components/Carousel/Carousel';
import { ScrollRestoration } from "react-router-dom";
import  heroImage  from "/assets/hero-new-collection.jpg";
import './NewCollectionPage.css';
import { getItemsByGenre } from '../../helpers/getItemsByGenre';
import { Features } from '../../UI/components/Features/Features';
import { LazyBackgroundImg } from '../../UI/components/LazyBackgroundImg/LazyBackgroundImg';

export const NewCollectionPage = () => {
  
  const listItemsMen = ( getItemsByGenre('men') ).filter( item => item.latestArrival === true );
  const listItemsWomen = ( getItemsByGenre('women') ).filter( item => item.latestArrival === true );

  return (
    <>

    <LazyBackgroundImg imgUrl={heroImage} cssClass='hero-new-collection'>
        <article className='hero-content container flex'>
            <h1 className='text-center'>New Collection</h1>
            <div className="underline-title"></div>
        </article>
        <div className="overlay-hero"></div>
    </LazyBackgroundImg>

    
      <Carousel listItems={ listItemsWomen } title= 'Women' id='women'/>
      <Carousel listItems={ listItemsMen } title= 'Men' id='men'/>
      
      <Features/>
      <ScrollRestoration/>
    </>
  )
}
