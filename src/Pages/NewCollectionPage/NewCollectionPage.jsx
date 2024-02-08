import { Carousel } from '../../UI/components/Carousel/Carousel';
import { ScrollRestoration } from "react-router-dom";
import './NewCollectionPage.css';
import { getItemsByGenre } from '../../helpers/getItemsByGenre';

export const NewCollectionPage = () => {
  
  const listItemsMen = ( getItemsByGenre('men') ).filter( item => item.latestArrival === true );
  const listItemsWomen = ( getItemsByGenre('women') ).filter( item => item.latestArrival === true );

  return (
    <>
     
      

        <Carousel listItems={ listItemsWomen } title= 'Women' id='women'/>
        <Carousel listItems={ listItemsMen } title= 'Men' id='men'/>
      
      
      



      <ScrollRestoration/>
    </>
  )
}
