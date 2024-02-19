import heroImage from '/assets/clothing-store-hero.jpg';
import { Link } from "react-router-dom";
import './Hero.css';
import { LazyBackgroundImg } from '../LazyBackgroundImg/LazyBackgroundImg';

export const Hero = () => {
  return (
    <>

        <LazyBackgroundImg imgUrl={ heroImage } cssClass='hero-section' imgPosition='100% 25%'>
            <article className='hero-content container flex'>
                <h1 className='text-center'>Dollek Collection on Sale Now</h1>
                <div className="underline-title"></div>
                <p className='sm text-center'>Mid-Season SALE only at Olea</p>
                <Link className='sm' to="/new-collection">View Collection</Link>
            </article>
            <div className="overlay-hero"></div>
        </LazyBackgroundImg>
    </>
  )
}
