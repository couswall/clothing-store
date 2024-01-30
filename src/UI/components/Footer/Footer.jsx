import { Link } from 'react-router-dom'
import { FaArrowRight} from "react-icons/fa6";
import './Footer.css'



export const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
              <div className="footer-wrapper grid">

                  <div className="shop-footer">
                    <h4>Shop</h4>
                    <ul>
                      <li><Link to={'/'}>New Collection</Link></li>
                      <li><Link to={'/women'}>Women</Link></li>
                      <li><Link to={'/men'}>Men</Link></li>
                    </ul>
                  </div>  

                  <div className="menu-footer">
                    <h4>Menu</h4>
                    <ul>
                    <li><Link to={'/'}>Home</Link></li>
                      <li><Link to={'/store'}>Store</Link></li>
                      <li><Link to={'/about'}>About</Link></li>
                      <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                  </div>

                  <div className="helpful-links-footer">
                    <h4>Helpful Links</h4>
                    <ul>
                      <li><Link to={'/women'}>404 Error Page</Link></li>
                    </ul>
                  </div>

                  <div className='form-container'>
                    <h4>The good stuff in your box</h4>
                    <p>News & updates from Olea. No spam, we promise.</p>
                    
                    <form className='grid'>
                      <input 
                        type="email" 
                        placeholder='Enter your email'
                        required
                      />
                      <button className='btn flex'>
                        Sign Up
                        <FaArrowRight />
                      </button>
                    </form>
                  </div>

              </div>
            </div>
        </footer>
    </>
  )
}
