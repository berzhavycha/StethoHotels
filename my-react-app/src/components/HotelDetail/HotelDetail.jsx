import React, { Suspense, useState } from 'react'
import { Await, defer, useLoaderData, useParams } from 'react-router-dom'
import { getItems } from '../../data'
import Loading from '../../common/Loading/Loading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HotelDetail.css'
import TabContent from './TabContent';
import HotelReviews from './HotelReviews/HotelReviews';
import HotelOverview from './HotelOverview';
import HotelAmenties from './HotelAmenties';
import HotelRooms from './HotelRooms';
import HelpBlock from '../../common/HelpBlock/HelpBlock'
import HotelFilters from '../HotelListing/HotelListingComponents/HotelFilters/HotelFilters'
import { useSelector } from 'react-redux';
import { selectHotelById, useGetHotelsQuery } from '../../features/hotelsSlice';


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


const HotelDetail = () => {
    // const hotelPromise = useLoaderData()
    const { hotelId } = useParams()
    
    const {hotel, isLoading, isError} = useGetHotelsQuery(undefined, {
        selectFromResult: ({data, isLoading, isError}) => ({
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
                            <button
                                className={`${currentTab === 'overview' && 'active'}`}
                                onClick={() => setCurrentTab('overview')}
                            >
                                Overviews
                            </button>
                            <button
                                className={`${currentTab === 'amenties' && 'active'}`}
                                onClick={() => setCurrentTab('amenties')}
                            >
                                Amenties
                            </button>
                            <button
                                className={`${currentTab === 'rooms' && 'active'}`}
                                onClick={() => setCurrentTab('rooms')}
                            >
                                Rooms
                            </button>
                            <button
                                className={`${currentTab === 'reviews' && 'active'}`}
                                onClick={() => setCurrentTab('reviews')}
                            >
                                Reviews
                            </button>
                        </div>
                        <div className="hotels-details-content">
                            <TabContent id={'overview'} currentTab={currentTab}>
                                <HotelOverview hotel={hotel} />
                            </TabContent>
                            <TabContent id={'amenties'} currentTab={currentTab}>
                                <HotelAmenties hotel={hotel} />
                            </TabContent>
                            <TabContent id={'rooms'} currentTab={currentTab}>
                                <HotelRooms hotel={hotel} />
                            </TabContent>
                            <TabContent id={'reviews'} currentTab={currentTab} >
                                <HotelReviews hotel={hotel} />
                            </TabContent>
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
