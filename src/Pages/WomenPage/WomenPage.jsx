import { ScrollRestoration} from 'react-router-dom';
import { CategoryProduct } from "../../UI/components/CategoryProduct/CategoryProduct"
import { getItemsByGenre } from "../../helpers/getItemsByGenre"
import heroImage from '/assets/hero-women.jpg';
import { Features } from '../../UI/components/Features/Features';
import "./WomenPage.css";

export const WomenPage = () => {

  const itemsList = getItemsByGenre('women');
  
  return (
    <>
    <section className='hero-women'
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
          <article className='hero-content container flex'>
            <h1 className='text-center'>Women Collection</h1>
            <div className="underline-title"></div>
            <p className='sm text-center'>Mid-Season SALE only at Olea</p>
        </article>
        <div className="overlay-hero"></div>
        </section>
        
        <CategoryProduct itemsList = { itemsList } genre = 'women' />
        
        <Features/>

        <ScrollRestoration/>
    </>
  )
}
