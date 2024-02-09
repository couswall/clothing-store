import heroImage from '/assets/clothing-store-hero.jpg';
import { Link } from "react-router-dom";
import './Hero.css';

export const Hero = () => {
  return (
    <>
        <section 
            className='hero-section'
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: '100% 25%',
                backgroundRepeat: 'no-repeat',
            }}
        >
        <article className='hero-content container flex'>
            <h1 className='text-center'>Dollek Collection on Sale Now</h1>
            <div className="underline-title"></div>
            <p className='sm text-center'>Mid-Season SALE only at Olea</p>
            <Link className='sm' to="/new-collection">View Collection</Link>
        </article>


        <div className="overlay-hero"></div>
        </section>
    </>
  )
}
