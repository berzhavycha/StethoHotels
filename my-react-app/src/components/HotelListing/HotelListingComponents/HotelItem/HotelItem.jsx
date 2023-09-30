import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from 'react-redux';
import { selectHotelById } from '../../../../features/hotelsSlice';

import './HotelItem.css'

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: (
        <div>
            <div className="hotel-next-arrow"> <i class="fa-solid fa-angle-right"></i> </div>
        </div>
    ),
    prevArrow: (
        <div>
            <div className="hotel-prev-arrow"> <i class="fa-solid fa-angle-left"></i> </div>
        </div>
    ),
    responsive: []
};


const HotelItem = ({ id }) => {
    const hotel = useSelector(state => selectHotelById(state, id))

    const stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(i < hotel.stars ? <i key={i} className="hotel-star fa-solid fa-star"></i>
            :
            <i key={i} className="hotel-star fa-regular fa-star"></i>
        )
    }

    const hotelAmenties = JSON.parse(hotel.amenties)

    return (
        <Link to={`${hotel.id}`} className='hotel-item' data-testid='hotel-item'>
            <div className="left">
                <div className="image-slider">
                    <Slider {...settings}>
                        {hotel.images.map((imgSrc, index) => {
                            return (
                                <img key={index} src={imgSrc} />
                            )
                        })}
                    </Slider>
                </div>
            </div>
            <div className="right">
                <h1>{hotel.name}</h1>
                <p className='price'><span className='green'>${hotel.price}/</span>Per night</p>
                <p className="location"><i class="fa-solid fa-location-dot"></i> {hotel.location}</p>
                <div className="stars">
                    {stars}
                    <p>1000 review</p>
                </div>
                <div className="amenties">
                    {
                        hotelAmenties.slice(0, 4).map((item, index) => {
                            return (
                                <div className="amenties-item">
                                    <i className={`fa-solid ${item.icon}`}></i>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="hotel-btn">
                    <button>View Details</button>
                    <button>Book Now</button>
                </div>
            </div>
        </Link>
    )
}

export default HotelItem
