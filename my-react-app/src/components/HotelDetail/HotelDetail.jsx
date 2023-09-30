import React, { Suspense, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TabContent from './TabContent';
import HotelReviews from './HotelReviews/HotelReviews';
import HotelOverview from './HotelOverview';
import HotelAmenties from './HotelAmenties';
import HotelRooms from './HotelRooms';
import HelpBlock from '../../common/HelpBlock/HelpBlock'
import HotelFilters from '../HotelListing/HotelListingComponents/HotelFilters/HotelFilters'
import { useGetHotelsQuery } from '../../features/hotelsSlice';

import './HotelDetail.css'

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


const tabButtons = [
    { id: 'overview', label: 'Overview' },
    { id: 'amenties', label: 'Amenties' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'reviews', label: 'Reviews' }
]

const HotelDetail = () => {
    const { hotelId } = useParams()
    const { hotel } = useGetHotelsQuery(undefined, {
        selectFromResult: ({ data, isLoading, isError }) => ({
            hotel: data?.entities[hotelId],
            isError,
            isLoading
        })
    })

    const [currentTab, setCurrentTab] = useState('overview')

    return (
        <section className='hotel-detail'>
            <div className="hotel-detail-inner container">
                <div className="left">
                    <h1>{hotel?.name}</h1>
                    <p><i class="fa-solid fa-location-dot"></i> {hotel?.location}</p>
                    <div className="hotel-images-slider">
                        <Slider {...settings}>
                            {hotel?.images.map((imgSrc, index) => {
                                return (
                                    <img key={index} src={imgSrc} />
                                )
                            })}
                        </Slider>
                    </div>
                    <div className="hotel-details-info">
                        <div className="hotel-details-navbar">
                            {tabButtons.map(({ id, label }) => (
                                <button
                                    key={id}
                                    className={`${currentTab === id && 'active'}`}
                                    onClick={() => setCurrentTab(id)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <div className="hotels-details-content">
                            {tabButtons.map(({ id }) => (
                                <TabContent key={id} id={id} currentTab={currentTab}>
                                    {id === 'overview' && <HotelOverview hotel={hotel} />}
                                    {id === 'amenties' && <HotelAmenties hotel={hotel} />}
                                    {id === 'rooms' && <HotelRooms hotel={hotel} />}
                                    {id === 'reviews' && <HotelReviews hotel={hotel} />}
                                </TabContent>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="right">
                    <HotelFilters />
                    <HelpBlock />
                </div>
            </div>
        </section >
    )
}

export default HotelDetail
