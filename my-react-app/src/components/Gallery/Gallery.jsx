import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { gallery } from '../../data'

import './Gallery.css'


const Gallery = () => {
    const [isSliderOpen, setIsSliderOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(null)

    const isRightWall = currentSlide === (gallery.length - 1)
    const isLeftWall = currentSlide === 0

    const openSlider = (id) => {
        const index = gallery.findIndex(item => item.id === id);
        if (index !== -1) {
            setCurrentSlide(index);
            setIsSliderOpen(true);
        }
    }

    const closeSlider = (e) => {
        if (!e.target.closest('.slider-item')
            && !e.target.closest('.slick-next')
            && !e.target.closest('.slick-prev')
        ) {
            setIsSliderOpen(false)
        }
    }

    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        initialSlide: currentSlide,
        nextArrow: (
            <div>
                <div className={`next-gallery-slick-arrow ${isRightWall && 'final-slide'}`}> <i className="fa-solid fa-arrow-right"></i> </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className={`prev-gallery-slick-arrow ${isLeftWall && 'final-slide'}`}> <i className="fa-solid fa-arrow-left"></i> </div>
            </div>
        ),
        afterChange: (currentSlide) => setCurrentSlide(currentSlide)
    }

    return (
        <section className="gallery-section">
            <div className="container gallery-section-inner">
                {gallery.map(item => {
                    return (
                        <div key={item.key} className="gallery-item" onClick={() => openSlider(item.id)}>
                            <div className="gallery-photo">
                                <img src={item.imageUrl} />
                                <div className="shell">
                                    <i className="fa-solid fa-image"></i>
                                </div>
                            </div>
                            <div className="title">
                                <span>{item.title}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={`gallery-slider-section ${isSliderOpen && 'open-gallery'}`} onClick={closeSlider}>
                <div className="gallary-slider-container">
                    {
                        isSliderOpen &&
                        <Slider {...settings}>
                            {gallery.map(item => (
                                <div className='slider-item' key={item.key}>
                                    <img src={item.imageUrl} alt={item.title} />
                                </div>
                            ))}
                        </Slider>
                    }
                </div>
            </div>

        </section>
    )
}

export default Gallery
