
import { useState } from 'react';
import './FeaturedOn.css'

export const FeaturedOn = () => {

    const [cells, setCells] = useState(Array(6).fill(null));

  return (
    <>
        <section className='featured-on-section section'>
            <div className="container">
                <div className="title-featured-on-wrapper">
                    <h3 className='heading-line text-center'>Featured On</h3>
                </div>
                <div className="logos-wrapper grid">
                    {
                        cells.map( ( cell, index ) => (
                            <article key={ index } className='logo-content flex'>
                                <p>Logo { index + 1 }</p>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}
