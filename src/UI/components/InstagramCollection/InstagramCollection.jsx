import { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import './InstagramCollection.css';

export const InstagramCollection = () => {

    const [cells, setCells] = useState(Array(6).fill(null));

  return (
    <>
        <section className="instagram-section">
            <div className="grid">
                {
                    cells.map( (cell, index) => (
                        <article className='img-container' key={ index }>
                            <img loading="lazy" src= {`/assets/instagram-collection/instagram-collection-${ index + 1 }.jpg`} alt="ig-collection" />
                        </article>
                    ))
                }
            
            <Link className='btn btn-secondary flex' to={'/'}>
                <FaInstagram className='ig-icon' />
                Follow Dollek
            </Link>
            </div>
        </section>
    </>
  )
}
