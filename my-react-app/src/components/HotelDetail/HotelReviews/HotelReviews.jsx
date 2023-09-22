import React, { useState } from 'react'
import ReviewItem from './ReviewItem'
import './HotelReviews.css'


const HotelReviews = ({ hotel }) => {
    const [reviews, setReviews] = useState(JSON.parse(hotel.reviews))

    return (
        <section className='hotel-reviews'>
            <h2>Reviews</h2>
            <div className="hotel-reviews-inner">
                {reviews?.map((review, index) => {
                    return <ReviewItem review={review} key={index} />
                })}
            </div>
        </section>
    )
}

export default HotelReviews
