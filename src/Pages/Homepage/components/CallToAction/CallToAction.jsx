import  callToActionImage  from '/assets/best-day-call2action.jpg';
import { Link } from "react-router-dom";
import './CallToAction.css'
import { LazyBackgroundImg } from '../../../../UI/components/LazyBackgroundImg/LazyBackgroundImg';


export const CallToAction = () => {
  return (
    <>

        <LazyBackgroundImg imgUrl={ callToActionImage } cssClass='best-day-call2action'>
          <article className='hero-content container flex'>
              <h2 className='text-center'>Best of the day</h2>
              <Link className='sm' to="/new-collection">View Collection</Link>
          </article>
          <div className="overlay-hero"></div>
        </LazyBackgroundImg>

    </>
  )
}
