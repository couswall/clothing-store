import { Hero,Features, Carousel } from "../../UI/components"
import { items } from "../../data/data"
import { Categories } from "./components/"

export const Homepage = () => {

  const listItems = items.filter( item => item.latestArrival );

  return (
    <>
      <Hero/>
      <Features/>
      <Categories/>
      
      <Carousel title= 'Latest Arrivals' listItems={ listItems }/>
    </>
  
  )
}
