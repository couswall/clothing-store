import heroContactImage from "/assets/contact-hero.jpg";
import './ContactPage.css';
import { Features } from "../../UI/components/Features/Features";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

export const ContactPage = () => {

  const [submitingForm, setSubmitingForm] = useState( true )

  const { name, email, text, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    text: ''
  })

  const onSubmitContact = (e) => {
    e.preventDefault();
  }

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

        {/* <Features/> */}

        <section className="contact-section section">
          <div className="container grid">
            <div className="contact-text-container">
              <h2>Get in touch with our support team</h2>
              <p>With our versatile product range and commitment to affordability, we are here to help you go places in style, without any compromises. So why not browse our collections today and let us help you achieve your fashion goals with ease!
              </p>
            </div>

            <form className="contact-us-form" onSubmit={ onSubmitContact }>
            <input 
              type="text" 
              placeholder="Your name" 
              required 
              name="text"
              value={text}
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
              Submit
            </button>
          </form>

          </div>
        </section>
    </>
  )
}
