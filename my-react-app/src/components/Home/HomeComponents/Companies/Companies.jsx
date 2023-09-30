import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { companies } from '../../../../data';

import './Companies.css'

const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
};

const Companies = () => {

    return (
        <section className='companies-section'>
            <div className="container companies-section-inner">
                <Slider {...settings}>
                    {companies.map((item, index) => {
                        return (
                            <div className="photo" key={index}>
                                <img
                                    src={item.imageUrl}
                                    key={item.id}
                                    onMouseLeave={e => e.currentTarget.src = item.imageUrl}
                                    onMouseOver={e => e.currentTarget.src = item.replaceUrl}
                                    alt={`company${item.id}`}
                                />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}

export default Companies
