import { useState } from "react";
import { Link } from "react-router-dom";
import { QuickView } from "../QuickView/QuickView";
import { FaSearchPlus } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css'

export const Carousel = ({ title, listItems }) => {

    const [showQuickView, setShowQuickView] = useState(false);
    const [ currentItem, setCurrentItem ] = useState({});

    const onShowQuickView = (item) => {
        setShowQuickView( true );
        setCurrentItem( item );
    }

  return (
    <>
        <section className='carousel-section section'>
            <h2 className='text-center carousel-title'>{ title }</h2>
            <div className="container">
                
                <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    navigation = {{
                        nextEl: '.swiper-pagination-next',
                        prevEl: '.swiper-pagination-prev'
                    }}
                    breakpoints={{
                    
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        767.98: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        991.98: {
                            slidesPerView: 4,
                            
                        }
                    }}
                    className="mySwiper"
                >

                    {
                        listItems.map( item => (
                            <SwiperSlide key={ item.id }>
                                <button 
                                    className="quick-view-button" 
                                    onClick={ () => onShowQuickView( item ) }>
                                        <FaSearchPlus className="quick-view-icon"/>
                                </button>
                                <Link to={`/product/${ item.productNumber }`}>
                                    <article className='item-container flex'>
                                        <div className="img-container">
                                            <img src={`/assets/${ item.genre }/${ item.productName }.jpg`} alt={ item.description } />
                                            <div className="overlay-product"></div>
                                        </div>

                                        <div className="item-information">
                                            <h4 className='item-name'>{ item.description }</h4>
                                            <p className='price text-center'>${ (item.price).toFixed(2) } USD</p>
                                        </div>
                                    </article>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="swiper-pagination"></div>
                
                <button className="swiper-pagination-prev btn">
                    <FaArrowLeft/>
                </button>
                <button className="swiper-pagination-next btn">
                    <FaArrowRight />
                </button>

            </div>
        </section>

        {
            ( showQuickView ) && <QuickView item = { currentItem } setShowQuickView = { setShowQuickView }/>
        }
    </>
  )
}
