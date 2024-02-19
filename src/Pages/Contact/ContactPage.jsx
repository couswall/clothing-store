import { ScrollRestoration } from 'react-router-dom'
import heroContactImage from "/assets/contact-hero.jpg";
import './ContactPage.css';
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { LazyBackgroundImg } from '../../UI/components/LazyBackgroundImg/LazyBackgroundImg';

export const ContactPage = () => {

  const [submitingForm, setSubmitingForm] = useState( false );
  const [hasBeenSubmited, setHasBeenSubmited] = useState( false );

  const { name, email, text, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    text: ''
  })

  const onSubmitContact = async (e) => {
    e.preventDefault();
    setSubmitingForm( true );

    await new Promise( r => setTimeout(r, 1000));

    setSubmitingForm( false );
    setHasBeenSubmited( true );

  }

  return (

    <>
        <LazyBackgroundImg imgUrl={ heroContactImage } cssClass={'hero-contact'}>
          <article className='hero-content container flex'>
              <h1 className='text-center'>Contact us</h1>
              <div className="underline-title"></div>
            </article>
          <div className="overlay-hero"></div>
        </LazyBackgroundImg>

        <section className="contact-section section">
          <div className="container grid">
            <div className="contact-text-container">
              <h2>Get in touch with our support team</h2>
              <p>With our versatile product range and commitment to affordability, we are here to help you go places in style, without any compromises. So why not browse our collections today and let us help you achieve your fashion goals with ease!
              </p>
            </div>

            {
                ( !hasBeenSubmited ) 
                  ?  <form className="contact-us-form" onSubmit={ onSubmitContact }>
                        <input 
                          type="text" 
                          placeholder="Your name" 
                          required 
                          name="name"
                          value={name}
                          onInput={ onInputChange }
                        />
                        <input 
                          type="email" 
                          placeholder="Your email"
                          required
                          name="email"
                          value={email}
                          onInput={ onInputChange }
                        />
                        <textarea placeholder="Your text"/>
          
                        <button 
                          className={`btn btn-secondary ${ submitingForm ? 'submiting' : '' }` }
                          type="submit"
                          name="text"
                          value={text}
                          onInput={ onInputChange }
                        >
                          {
                            submitingForm ? 'Submitting...' : 'Submit'
                          }
                        </button>
                      </form>
                  : <div className="submission-message"><p className="text-center">Thank you! Your submission has been received!</p></div>
            }

           

          </div>
        </section>

        <ScrollRestoration/>
    </>
  )
}
