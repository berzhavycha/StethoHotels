import React, { useEffect, useState } from 'react'
import { months } from '../../../../data'
import './CommentItem.css'


const CommentItem = ({ comment }) => {
    const [comments, setComments] = useState(comment.nestedComments)
    const [isReplying, setIsReplying] = useState(false)
    const [commentText, setCommentText] = useState('')

    const dateParts = comment.date.split('.')
    const date = `${months[+dateParts[1] - 1]} ${dateParts[0]}, ${dateParts[2]}`

    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < comment.stars) {
            stars.push(<div><i key={i} className="fa-solid fa-star"></i></div>)
        }
        else {
            stars.push(<div><i key={i} className="fa-regular fa-star"></i></div>)
        }
    }

    const onComment = () => {
        const newComment = {
            imageUrl: 'https://raw.githubusercontent.com/aberzhavych/StethoProject/main/blog-3.jpg',
            text: commentText,
            author: 'my name',
            date: '01.05.2023',
            stars: 4,
            nestedComments: []
        }

        setComments(prevComments => [ ...prevComments, newComment])

        setCommentText('')
    }

    return (
        <div className="comment-wrapper">
            <div className='comment-item'>
                <div className="profile-photo">
                    <img src={comment.imageUrl} />
                </div>
                <div className="comment-container">
                    <div className="comment-top">
                        <div className="left">
                            <span className='author'>{comment.author}</span> - <span className='date'>{date}</span> :
                        </div>
                    </div>
                    <p>{comment.text}</p>
                    <div className="comment-btns">
                        <button onClick={() => setIsReplying(prev => !prev)}>{isReplying ? 'Cancel' : 'Reply'}</button>
                    </div>
                    <div className={`reply-section ${isReplying && 'open'}`}>
                        <input
                            type="text"
                            placeholder='Your comment'
                            onChange={e => setCommentText(e.target.value)}
                            value={commentText}
                        />
                        <button onClick={() => onComment()}>Comment</button>
                    </div>
                </div>
            </div>
            <div className="nested-comments">
                {comments?.map((item, index) => {
                    return <CommentItem comment={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default CommentItem
