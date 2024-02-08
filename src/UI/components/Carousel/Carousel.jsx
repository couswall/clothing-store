import { useState } from "react";
import { Link } from "react-router-dom";
import { QuickView } from "../QuickView/QuickView";
import { FaSearchPlus } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './Carousel.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Item } from "../Item/Item";

export const Carousel = ({ title, listItems, id }) => {

    const paginationClass = `swiper-pagination-${id}`;
    const nextButtonClass = `swiper-pagination-next-${id}`;
    const prevButtonClass = `swiper-pagination-prev-${id}`;

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
                        el: `.${paginationClass}`
                    }}
                    navigation = {{
                        nextEl: `.${nextButtonClass}`,
                        prevEl: `.${prevButtonClass}`
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
                                <Item item = { item }/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={`swiper-pagination ${paginationClass}`}></div>
                
                <button className={`swiper-pagination-prev btn ${prevButtonClass}`}>
                    <FaArrowLeft/>
                </button>
                <button className={`swiper-pagination-next btn ${nextButtonClass}`}>
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
