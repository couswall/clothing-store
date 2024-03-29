import { Hero,Features, Carousel, FeaturedOn } from "../../UI/components"
import { items } from "../../data/data"
import { shuffleArray } from "../../helpers/shuffleArray";
import { CallToAction, Categories } from "./components/"


export const Homepage = () => {
  
  const listItems = items.filter( item => item.latestArrival );
  const latestItems = shuffleArray( listItems, 10 );
  

  return (
    <>
      <Hero/>
      <Features/>
      <Categories/>
      
      <Carousel title= 'Latest Arrivals' listItems={ latestItems } id='last-arrivals'/>

      <FeaturedOn/>

      <CallToAction/>
      
    </>
  
  )
}
