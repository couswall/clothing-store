import { FeaturedOn } from "../../UI/components/";
import { Link, ScrollRestoration } from "react-router-dom";
import aboutImage from '/assets/about-section.jpg';
import './AboutPage.css';

export const AboutPage = () => {
  return (

    <>
        <section className="about-section section">
            <div className="container grid">

              <div className="image-wrapper">
                <img src={ aboutImage } alt="About us" />
                <div className="about-years-content">
                  <h2 className='number-text'>10</h2>
                  <h4 className='years-text'>Years of experience</h4>
                </div>
              </div>

              <div className="about-info-container">
                <h2>Quality is what matters most.</h2>
                <p>Based on collective work and shared knowledge, Structure aims to favor dialogue and debate, to transform individual knowledge into increased creative potential.
                <br/><br/>
                Our studio is a architecture practice based in NY and Paris. Today, it includes 150 architects, urban planners, landscape and interior designers of 25 different nationalities. The company principle of Architecture-Studio is the collective conception. From the very beginning, the practice has believed in the virtues of exchange, crossing ideas, common effort, shred knowledge</p>

                <Link to={'/store'} className='btn btn-secondary'>Shop Now</Link>
              </div>
            </div>
        </section>

        <FeaturedOn/>

        <ScrollRestoration/>
    </>
  )
}
