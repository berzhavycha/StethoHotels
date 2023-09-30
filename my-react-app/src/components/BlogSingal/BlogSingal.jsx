import React, { useState, useMemo } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { formatDate, months } from '../../data'
import CommentItem from './BlogSingalComponents/CommentItem/CommentItem'
import { selectBlogById, useUpdateCommentsMutation } from '../../features/blogsSlice'
import useUserContext from '../../context/User/UserProvider'

import './BlogSingal.css'

const BlogSingal = () => {
    const { blogId } = useParams()
    const loadedBlog = useSelector(state => selectBlogById(state, blogId))
    const [commentText, setCommentText] = useState('')
    const { user } = useUserContext()
    const [addComment] = useUpdateCommentsMutation()
    const navigate = useNavigate()

    const topLevelComments = useMemo(() => {
        return loadedBlog?.comments.filter(comment => !comment.parentId) || []
    }, [loadedBlog?.comments])


    const dateParts = loadedBlog?.date.split('.')
    const date = `${months[+dateParts?.[1] - 1]} ${dateParts?.[0]}, ${dateParts?.[2]}`

    const onComment = async () => {
        if(!user.id) navigate(`/login?message=You should login first!&path=/blog/${blogId}`)

        try {
            const newDate = new Date()

            const newComment = {
                imageUrl: user.imageUrl,
                text: commentText,
                author: user.id,
                date: formatDate(newDate),
                stars: 4,
                parentId: null,
                id: nanoid()
            }

            await addComment({ comments: [...loadedBlog.comments, newComment], blogId: loadedBlog.id }).unwrap()
            setCommentText('')
        } catch (error) {
            console.log("ERROR: " + error.message)
        }
    }

    return (
        <section className='blog-singal'>
            <img src={loadedBlog?.imageUrl} />
            <div className="blog-info">
                <div className="blog-info-top">
                    <span className='time'>{date}</span>
                    <span className='type'>{loadedBlog?.type}</span>
                </div>
                <p className="blog-title">{loadedBlog?.title}</p>
                <p className="blog-text">{loadedBlog?.description}</p>
            </div>
            <div className="two-column">
                <p className="blog-title">{loadedBlog?.twoColumn}</p>
                <div className="columns">
                    <div className="left">{loadedBlog?.column1}</div>
                    <div className="right">{loadedBlog?.column2}</div>
                </div>
            </div>
            <div className="flex-block">
                <div className="tags">
                    <span>TAGS: </span>
                    <span>{loadedBlog?.tag}</span>
                </div>
                <div className="share">
                    <span>SHARE: </span>
                    <div className="icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-google-plus-g"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <section className="comment-section">
                <div className="comments-wrapper">
                    <h1>Read Comments</h1>
                    <div className="comments">
                        {topLevelComments?.map((comment, index) => {
                            return (
                                <CommentItem comment={comment} key={index} />
                            )
                        })}
                    </div>
                </div>
                <div className="post-comments">
                    <h1>Post Comments</h1>
                    <div className="post-wrapper">
                        <textarea
                            type="text"
                            placeholder='Your comment'
                            onChange={e => setCommentText(e.target.value)}
                            value={commentText}
                            data-testid='comment-input'
                        />
                        <button onClick={() => onComment()} data-testid='comment-btn'>Comment</button>
                    </div>
                </div>
            </section>
        </section >
    )
}


export default BlogSingal
