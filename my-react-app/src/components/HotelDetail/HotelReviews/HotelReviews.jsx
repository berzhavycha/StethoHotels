import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

import ReviewItem from './ReviewItem'
import { useUpdateReviewMutation } from '../../../features/hotelsSlice'
import useUserContext from '../../../context/User/UserProvider'
import { formatDate } from '../../../data'

import './HotelReviews.css'

const HotelReviews = ({ hotel }) => {
    const [reviewText, setReviewText] = useState('')
    const { user } = useUserContext()
    const [addReview] = useUpdateReviewMutation()
    const navigate = useNavigate()

    const topLevelReviews = hotel.reviews.filter(review => !review.parentId)

    const onAddReview = async () => {
        if (!user.id) navigate(`/login?message=You should login first!&path=/hotels/${hotel.id}`)


        try {
            const date = new Date()

            const newReview = {
                id: nanoid(),
                fullName: user.fullName,
                text: reviewText,
                date: formatDate(date),
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
                parentId: null
            }

            await addReview({ hotelId: hotel.id, reviews: [...hotel.reviews, newReview] }).unwrap()
            setReviewText('')
        } catch (error) {
            console.log("ERROR: " + error.message)
        }
    }


    return (
        <section className='hotel-reviews'>
            <h2>Reviews</h2>
            <div className="hotel-reviews-inner">
                {topLevelReviews.length ? topLevelReviews?.map((review, index) => {
                    return <ReviewItem review={review} key={index} hotel={hotel} />
                }) :
                    <p>There are no reviews...</p>
                }
            </div>
            <div className="text-review">
                <h3>Leave your review: </h3>
                <textarea onChange={e => setReviewText(e.target.value)} value={reviewText} name="review-text" placeholder='Type your review...'></textarea>
                <button onClick={onAddReview}>Leave Review</button>
            </div>
        </section>
    )
}

export default HotelReviews
