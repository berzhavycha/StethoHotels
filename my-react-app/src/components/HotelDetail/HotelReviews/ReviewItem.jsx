import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import useUserContext from '../../../context/User/UserProvider'
import { selectHotelById, useUpdateReviewMutation } from '../../../features/hotelsSlice'
import { formatDate } from '../../../data'

const ReviewItem = ({ review }) => {
    const { hotelId } = useParams()
    const hotel = useSelector(state => selectHotelById(state, hotelId))
    const [isUserReview, setIsUserReview] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isReplying, setIsReplying] = useState(false)
    const [reviewText, setReviewText] = useState('')
    const { user } = useUserContext()
    const [updateReviews] = useUpdateReviewMutation()

    const nestedReviews = hotel.reviews.filter(item => item.parentId === review.id)

    const handleReply = () => {
        if (!user) {
            return navigate(`/login?message=You must log in first&path=${location.pathname}`)
        }
        setIsReplying(prev => !prev)
    }

    const onReview = async () => {
        try {
            const date = new Date()
            const dateString = formatDate(date)

            if (!isEditing) {
                const newReview = {
                    id: nanoid(),
                    fullName: user.fullName,
                    text: reviewText,
                    date: dateString,
                    imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
                    parentId: review.id
                }

                await updateReviews({ hotelId: hotel.id, reviews: [...hotel.reviews, newReview] }).unwrap()
            } else {

                const editedReviews = hotel.reviews.map(item => {
                    if (item.id === review.id) {
                        return {
                            ...item,
                            text: reviewText
                        }
                    }

                    return item
                })
                await updateReviews({ hotelId: hotel.id, reviews: editedReviews }).unwrap()
            }

            setIsReplying(false)
            setReviewText('')
        } catch (error) {
            console.log(error.message)
        }
    }

    const onMouseReviewEnter = () => {
        if (user.fullName === review.fullName) {
            setIsUserReview(true)
        }
    }

    const onMouseReviewLeave = () => {
        setIsUserReview(false)
    }

    const deleteReview = async () => {
        try {
            await updateReviews({ hotelId, reviews: hotel.reviews.filter(item => item.id !== review.id) }).unwrap()
        } catch (error) {
            console.log("ERROR: " + error.message)
        }
    }

    const editReview = () => {
        setReviewText(review.text)
        setIsReplying(true)
        setIsEditing(true)
    }

    return (
        <>
            <div data-testid='review-item' className='review-item' onMouseEnter={onMouseReviewEnter} onMouseLeave={onMouseReviewLeave}>
                <div className="review-item-inner">
                    <div className="review-photo">
                        <img src={review.imageUrl} />
                    </div>
                    <div className="review-content">
                        <div className="review-content-top">
                            <h3>{review.fullName}</h3>
                            <div className="review-top-right">
                                {isUserReview &&
                                    <>
                                        <button onClick={deleteReview} data-testid='delete-review' className='delete-btn'><i className="fa-solid fa-trash"></i></button>
                                        <button onClick={editReview}  data-testid='edit-review' className='edit-btn'><i className="fa-solid fa-pen-to-square"></i></button>
                                    </>
                                }
                                <p>{review.date}</p>
                                <span>-</span>
                                <button onClick={handleReply}>{isReplying ? 'Cancel' : 'Reply'}</button>
                            </div>
                        </div>
                        <p>{review.text}</p>
                    </div>
                </div>
                <div className={`reply-section ${isReplying && 'open'}`}>
                    <input
                        type="text"
                        placeholder='Reply...'
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                    />
                    <button onClick={onReview}>{isEditing ? 'Edit' : 'Reply'}</button>
                </div>
                <div className="nested-reviews">
                    {nestedReviews?.map((review, index) => {
                        return <ReviewItem review={review} key={index} />
                    })}
                </div>
            </div>
        </>
    )
}


export default ReviewItem
