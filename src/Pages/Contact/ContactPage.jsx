import heroContactImage from "/assets/contact-hero.jpg";
import './ContactPage.css';
import { Features } from "../../UI/components/Features/Features";

export const ContactPage = () => {
  return (

    <>
        <section 
          className="hero-contact section"
          style={{
            backgroundImage: `url(${heroContactImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
      }}  
        >
          <article className='hero-content container flex'>
            <h1 className='text-center'>Contact us</h1>
            <div className="underline-title"></div>
          </article>
        <div className="overlay-hero"></div>
        </section>

        <Features/>
    </>
  )
}
