import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { reviews } from '../../../../data';

import './Reviews.css'

const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: (
        <div>
            <div className="reviews-next-slick-arrow"> <i className="fa-solid fa-arrow-right"></i> </div>
        </div>
    ),
    prevArrow: (
        <div>
            <div className="reviews-prev-slick-arrow"> <i className="fa-solid fa-arrow-left"></i> </div>
        </div>
    ),
    responsive: [
        {
            breakpoint: 864,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
};

const Reviews = () => {
    return (
        <section className='reviews-section'>
            <div className="darker">
                <div className="container">
                    <div className="reviews-container">
                        <Slider {...settings}>
                            {reviews.map((item, index) => {
                                return (
                                    <div className="reviews-item" key={index}>
                                        <div className="reviews-item-inner">
                                            <p className="text">{item.text}</p>
                                            <div className="reviewer-info">
                                                <div className="left">
                                                    <img src={item.imageUrl} />
                                                </div>
                                                <div className="right">
                                                    <p className='fullname'>{item.fullName}</p>
                                                    <p className='prof'>{item.proffesion}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews
