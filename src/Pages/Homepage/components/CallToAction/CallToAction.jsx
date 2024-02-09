import  callToActionImage  from '/assets/best-day-call2action.jpg';
import { Link } from "react-router-dom";
import './CallToAction.css'


export const CallToAction = () => {
  return (
    <>
        <section 
        className="best-day-call2action section"
        style={{
          backgroundImage: `url(${ callToActionImage })`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <article className='hero-content container flex'>
            <h2 className='text-center'>Best of the day</h2>
            <Link className='sm' to="/new-collection">View Collection</Link>
        </article>

        <div className="overlay-hero"></div>

      </section>
    </>
  )
}
