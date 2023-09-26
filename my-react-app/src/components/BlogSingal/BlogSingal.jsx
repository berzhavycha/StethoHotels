import React, { useState, useMemo } from 'react'
import { months } from '../../data'
import './BlogSingal.css'
import CommentItem from './BlogSingalComponents/CommentItem/CommentItem'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBlogById, useUpdateCommentsMutation } from '../../features/blogsSlice'
import { nanoid } from '@reduxjs/toolkit'
import useUserContext from '../../context/User/UserProvider'


const BlogSingal = () => {
    const { blogId } = useParams()
    const loadedBlog = useSelector(state => selectBlogById(state, blogId))

    const { user } = useUserContext()

    const [addComment] = useUpdateCommentsMutation()

    const topLevelComments = useMemo(() => {
        return loadedBlog?.comments.filter(comment => !comment.parentId) || []
    }, [loadedBlog?.comments])

    const [commentText, setCommentText] = useState('')

    const dateParts = loadedBlog?.date.split('.')
    const date = `${months[+dateParts?.[1] - 1]} ${dateParts?.[0]}, ${dateParts?.[2]}`

    const checkExcerptDate = (num) => {
        return num < 10 ? `0${num}` : num
    }


    const onComment = () => {
        const newDate = new Date()

        const newComment = {
            imageUrl: user.imageUrl,
            text: commentText,
            author: user.id,
            date: `${checkExcerptDate(newDate.getDate())}.${checkExcerptDate(newDate.getMonth() + 1)}.${checkExcerptDate(newDate.getFullYear())}`,
            stars: 4,
            parentId: null,
            id: nanoid()
        }

        addComment({ comments: [...loadedBlog.comments, newComment], blogId: loadedBlog.id })
        setCommentText('')
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
                        />
                        <button onClick={() => onComment()}>Comment</button>
                    </div>
                </div>
            </section>
        </section >
    )
}


export default BlogSingal
