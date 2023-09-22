import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import useUserContext from '../../../context/User/UserProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const ReviewItem = ({ review }) => {
    const [nestedReviews, setNestedReviews] = useState(review.nestedReviews)
    const [isReplying, setIsReplying] = useState(false)
    const [reviewText, setReviewText] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useUserContext()



    const handleReply = () => {
        // if (!user) {
        //     return navigate(`/login?message=You must log in first&path=${location.pathname}`)
        // }
        setIsReplying(prev => !prev)
    }

    const checkDate = (number) => {
        if (number < 10) return `0${number}`
        else return `${number}`
    }


    const onReview = () => {
        const date = new Date()
        const dateString = `${checkDate(date.getDate())}.${checkDate(date.getMonth())}.${checkDate(date.getFullYear())}`

        const newReview = {
            id: 5,
            fullName: "Some",
            text: reviewText,
            date: "05.07.2023",
            imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            },
            nestedReviews: []
        }


        setNestedReviews(prev => [...prev, newReview])
        setReviewText('')
    }


    return (
        <>
            <div className='review-item'>
                <div className="review-item-inner">
                    <div className="review-photo">
                        <img src={review.imageUrl} />
                    </div>
                    <div className="review-content">
                        <div className="review-content-top">
                            <h3>{review.fullName}</h3>
                            <div className="review-top-right">
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
                    <button onClick={onReview}>Reply</button>
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
