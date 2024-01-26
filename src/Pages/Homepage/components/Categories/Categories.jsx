import { Link } from "react-router-dom";
import category1 from "/assets/category4.jpg";
import category2 from "/assets/category3.jpg";
import category3 from "/assets/category2.jpg";
import category4 from "/assets/category1.jpg";

import './Categories.css';


export const Categories = () => {
  return (
    <>
        <section className="categories-section section">
            <div className="container">
                <div className="categories-wrapper grid">

                    <Link  
                        to = {'/accesories'} 
                        className="category-container"
                    >       
                        <div    
                            className="category-background"
                            style={{
                                backgroundImage: `url(${category1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                transform: 'scale(1.04)',
                            }}
                        ></div>
                        <div className="category-overlay flex">
                            <h3>Accesories</h3>
                            <p>Shop now</p>
                        </div>
                    </Link>

                    <Link  
                        to = {'/women'} 
                        className="category-container"
                    >       
                        <div    
                            className="category-background"
                            style={{
                                backgroundImage: `url(${category2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                transform: 'scale(1.04)',
                            }}
                        ></div>
                        <div className="category-overlay flex">
                            <h3>Women</h3>
                            <p>Shop now</p>
                        </div>
                    </Link>

                    <Link  
                        to = {'/'} 
                        className="category-container"
                    >       
                        <div    
                            className="category-background"
                            style={{
                                backgroundImage: `url(${category3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                transform: 'scale(1.04)',
                            }}
                        ></div>
                        <div className="category-overlay flex">
                            <h3>New Collection</h3>
                            <p>Shop now</p>
                        </div>
                    </Link>

                    <Link  
                        to = {'/men'} 
                        className="category-container"
                    >       
                        <div    
                            className="category-background"
                            style={{
                                backgroundImage: `url(${category4})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                transform: 'scale(1.04)',
                            }}
                        ></div>
                        <div className="category-overlay flex">
                            <h3>Men</h3>
                            <p>Shop now</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}
