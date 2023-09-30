import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

import SectionHeader from '../../../../common/SectioHeader/SectionHeader';
import { hotels } from '../../../../data';

import './HotelSlider.css'


const generateStarIcons = (item, maxStars = 5) => {
    const stars = [];

    for (let i = 0; i < maxStars; i++) {
        stars.push(<i key={i} className={`fa-${i < item.stars ? 'solid' : 'regular'} fa-star`}></i>)
    }

    return stars;
}

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: (
        <div>
            <div className="next-slick-arrow"> <i className="fa-solid fa-arrow-right"></i> </div>
        </div>
    ),
    prevArrow: (
        <div>
            <div className="prev-slick-arrow"> <i className="fa-solid fa-arrow-left"></i> </div>
        </div>
    ),
    responsive: [
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
}

const HotelSlider = () => {

    return (
        <section className='hotel-slider'>
            <SectionHeader text={'Most Popular Hotels'} />
            <div className="content">
                <div className="slider-container">
                    <Slider {...settings}>
                        {hotels.map((item) => {
                            return   <Link to={`/hotels/${item.id}`} className='slider-item' key={item.id}>
                            <div className="slider-item-inner">
                                <div className="item-photo">
                                    <img src={item.src} alt={item.alt} className="img" />
                                    <div className="map">
                                        <i className="fa-solid fa-location-dot"></i>
                                        {item.location}
                                    </div>
                                </div>
                                <div className="stars">
                                    {generateStarIcons(item)}
                                </div>
                                <p className="title">{item.title}</p>
                                <p className='price'><span className='green'>${item.price}/</span>Per night</p>
                            </div>
                        </Link>
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default HotelSlider
