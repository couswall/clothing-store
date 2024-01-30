import { ScrollRestoration} from 'react-router-dom';
import heroImage from '/assets/hero-men-page.jpg';
import { getItemsByGenre } from '../../helpers/getItemsByGenre';
import { CategoryProduct } from '../../UI/components/CategoryProduct/CategoryProduct';
import './MenPage.css';
import { Features } from '../../UI/components/Features/Features';

export const MenPage = () => {

  const itemsList = getItemsByGenre('men');

  return (
    <>
        <section className='hero-men'
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
          <article className='hero-content container flex'>
            <h1 className='text-center'>Men Collection</h1>
            <div className="underline-title"></div>
            <p className='sm text-center'>Mid-Season SALE only at Olea</p>
        </article>
        <div className="overlay-hero"></div>
        </section>

        <CategoryProduct itemsList = { itemsList } genre='men'/>
        
        <Features/>

        <ScrollRestoration/>
    </>
    )
}
