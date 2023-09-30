import React, { useMemo, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import { formatDate, months } from '../../../../data'
import { selectBlogById, useUpdateCommentsMutation } from '../../../../features/blogsSlice'
import ReactionButtons from '../ReactionButtons/ReactionButtons'
import useUserContext from '../../../../context/User/UserProvider'
import { useGetUsersQuery } from '../../../../features/userSlice'

import './CommentItem.css'

const CommentItem = memo(({ comment }) => {
    const [isUserComment, setIsUserComment] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const { user } = useUserContext()
    const [updateComments] = useUpdateCommentsMutation()
    const { blogId } = useParams()
    const loadedBlog = useSelector(state => selectBlogById(state, blogId))
    const [isReplying, setIsReplying] = useState(false)
    const [commentText, setCommentText] = useState('')
    const { author } = useGetUsersQuery(undefined, {
        selectFromResult: ({ data }) => ({
            author: data?.entities[comment?.author]
        })
    })

    const nestedComments = useMemo(() => {
        return loadedBlog?.comments?.filter(item => item.parentId === comment.id) || []
    }, [loadedBlog.comments]);

    const dateParts = comment?.date.split('.')
    const date = `${months[+dateParts?.[1] - 1]} ${dateParts?.[0]}, ${dateParts?.[2]}`

    const stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(i < comment?.stars ? <div><i key={i} className="fa-solid fa-star"></i></div>
            :
            <div><i key={i} className="fa-regular fa-star"></i></div>
        )
    }

    const onComment = async () => {
        if (!user.id) navigate(`/login?message=You should login first!&path=/blog/${blogId}`)

        try {
            if (isEditing) {

                const editedComments = loadedBlog.comments.map(item => {
                    if (item.id === comment.id) {
                        return {
                            ...item,
                            text: commentText
                        }
                    }

                    return item
                })

                await updateComments({ comments: editedComments, blogId: loadedBlog.id }).unwrap()
                setIsEditing(false)
            } else {
                const newDate = new Date()

                const newComment = {
                    imageUrl: user.imageUrl,
                    text: commentText,
                    author: user.id,
                    date: formatDate(newDate),
                    stars: 4,
                    parentId: comment.id ?? null,
                    id: nanoid()
                }

                await updateComments({ comments: [...loadedBlog.comments, newComment], blogId: loadedBlog.id }).unwrap()
            }

            setIsReplying(false)
            setCommentText('')
        } catch (error) {
            console.error('ERROR: ' + error)
        }
    }

    const handleMouseEnterComment = () => {
        if (comment.author === user.id) {
            setIsUserComment(true)
        }
    }

    const handleMouseLeaveComment = () => {
        if (comment.author === user.id) {
            setIsUserComment(false)
        }
    }

    const deleteComment = async () => {
        try {
            const remainingComments = loadedBlog.comments.filter(item => item.id !== comment.id)
            await updateComments({ comments: remainingComments, blogId: loadedBlog.id }).unwrap()
        } catch (error) {
            console.error('ERROR: ' + error.message)
        }
    }

    const editComment = () => {
        setCommentText(comment.text)
        setIsReplying(true)
        setIsEditing(true)
    }

    return (
        <div
            className="comment-wrapper" data-testid='comment-item'>
            <div
                className='comment-item'
                onMouseEnter={handleMouseEnterComment}
                onMouseLeave={handleMouseLeaveComment}
            >
                <div className="profile-photo">
                    <img src={author?.imageUrl} />
                </div>
                <div className="comment-container">
                    <div className="comment-top">
                        <div className="left">
                            <span className='author'>{author?.fullName}</span> - <span className='date'>{date}</span> :
                        </div>
                        <div className="right">
                            {isUserComment &&
                                <>
                                    <button onClick={deleteComment} className='delete-btn'><i className="fa-solid fa-trash"></i></button>
                                    <button onClick={editComment} className='edit-btn'><i className="fa-solid fa-pen-to-square"></i></button>
                                </>
                            }
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
                        <button onClick={onComment}>{isEditing ? 'Edit' : 'Comment'}</button>
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
