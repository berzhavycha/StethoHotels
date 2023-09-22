import React, { useMemo, useState } from 'react'
import { months } from '../../../../data'
import './CommentItem.css'
import { selectBlogById, useAddCommentMutation } from '../../../../features/blogsSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { memo } from 'react'
import ReactionButtons from '../ReactionButtons/ReactionButtons'
import useUserContext from '../../../../context/User/UserProvider'
import { useGetUsersQuery } from '../../../../features/userSlice'

const CommentItem = memo(({ comment }) => {
    const { user } = useUserContext()
    const { author } = useGetUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({
            author: data?.entities[comment?.author]
        })
    })

    const [addComment] = useAddCommentMutation()

    const { blogId } = useParams()
    const loadedBlog = useSelector(state => selectBlogById(state, blogId))

    const [isReplying, setIsReplying] = useState(false)
    const [commentText, setCommentText] = useState('')

    const nestedComments = useMemo(() => {
        return loadedBlog?.comments?.filter(item => item.parentId === comment.id) || []
    }, [loadedBlog.comments]);

    const dateParts = comment?.date.split('.')
    const date = `${months[+dateParts?.[1] - 1]} ${dateParts?.[0]}, ${dateParts?.[2]}`

    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < comment?.stars) {
            stars.push(<div><i key={i} className="fa-solid fa-star"></i></div>)
        }
        else {
            stars.push(<div><i key={i} className="fa-regular fa-star"></i></div>)
        }
    }

    const checkExcerptDate = (num) => {
        return num < 10 ? `0${num}` : num
    }

    const onComment = () => {
        const newDate = new Date()

        const newComment = {
            imageUrl: user.photoURL,
            text: commentText,
            author: user.id,
            date: `${checkExcerptDate(newDate.getDate())}.${checkExcerptDate(newDate.getMonth() + 1)}.${checkExcerptDate(newDate.getFullYear())}`,
            stars: 4,
            parentId: comment.id ?? null,
            id: nanoid()
        }

        addComment([...loadedBlog.comments, newComment])
        setCommentText('')
    }


    return (
        <div className="comment-wrapper" data-testid='comment-item'>
            <div className='comment-item'>
                <div className="profile-photo">
                    <img src={author?.imageUrl} />
                </div>
                <div className="comment-container">
                    <div className="comment-top">
                        <div className="left">
                            <span className='author'>{author?.fullName}</span> - <span className='date'>{date}</span> :
                        </div>
                    </div>
                    <p>{comment?.text}</p>
                    <div className="comment-btns">
                        <button
                            onClick={() => setIsReplying(prev => !prev)}
                            className='reply-btn'
                        >
                            {isReplying ? 'Cancel' : 'Reply'}
                        </button>
                        <ReactionButtons comment={comment} />
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
                {nestedComments?.map((comment, index) => {
                    return <CommentItem comment={comment} key={index} />
                })}
            </div>
        </div>
    )
})

export default CommentItem
