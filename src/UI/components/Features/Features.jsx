import { PiAirplaneTilt, PiChatsCircle } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import './Features.css';

export const Features = () => {
  return (
    <>
        <section className="features-section section">
            <div className="container">

                <div className="features-wrapper grid">

                <article className="feature-container flex">
                    <PiAirplaneTilt className="feature-icon"/>
                    <div className="feature-info">
                        <h4>Free Shipping</h4>
                        <p>Free shipping on all order</p>
                    </div>
                </article>

                <article className="feature-container flex">
                    <PiChatsCircle className="feature-icon"/>
                    <div className="feature-info">
                        <h4>Online Support</h4>
                        <p>Support online 24-7</p>
                    </div>
                </article>

                <article className="feature-container flex">
                    <TbPigMoney className="feature-icon"/>
                    <div className="feature-info">
                        <h4>Money Return</h4>
                        <p>Back guarantee 7 days</p>
                    </div>
                </article>

                <article className="feature-container flex">
                    <GrSecure className="feature-icon"/>
                    <div className="feature-info">
                        <h4>Secure Payment</h4>
                        <p>All cards accepted</p>
                    </div>
                </article>

                </div>

            </div>
        </section>
    </>
  )
}
