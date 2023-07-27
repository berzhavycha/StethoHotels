import React, { Suspense, useState } from 'react'
import { defer, useLoaderData, Await } from 'react-router-dom'
import { getItems, months } from '../../data'
import Loading from '../../common/Loading/Loading'
import './BlogSingal.css'
import CommentItem from './BlogSingalComponents/CommentItem/CommentItem'

export const loader = ({ params }) => {
    return defer({ blog: getItems('blogs', params.blogId) })
}

const BlogSingal = () => {
    const dataPromise = useLoaderData()

    return (
        <section className='blog-singal'>
            <Suspense fallback={<Loading />}>
                <Await resolve={dataPromise.blog}>
                    {(loadedBlog) => {

                        const [comments, setComments] = useState(JSON.parse(loadedBlog.comments))
                        const [commentText, setCommentText] = useState('')

                        const dateParts = loadedBlog.date.split('.')
                        const date = `${months[+dateParts[1] - 1]} ${dateParts[0]}, ${dateParts[2]}`

                    
                        const onComment = () => {
                            const newDate = new Date()
                            const newComment = {
                                imageUrl: 'https://raw.githubusercontent.com/aberzhavych/StethoProject/main/blog-3.jpg',
                                text: commentText,
                                author: 'my name',
                                date: `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()}`,
                                stars: 4,
                                nestedComments: []
                            }

                            setComments(prevComments => [...prevComments, newComment])
                            setCommentText('')
                        }

                        return (
                            <>
                                <img src={loadedBlog.imageUrl} />
                                <div className="blog-info">
                                    <div className="blog-info-top">
                                        <span className='time'>{date}</span>
                                        <span className='type'>{loadedBlog.type}</span>
                                    </div>
                                    <p className="blog-title">{loadedBlog.title}</p>
                                    <p className="blog-text">{loadedBlog.description}</p>
                                </div>
                                <div className="two-column">
                                    <p className="blog-title">{loadedBlog.twoColumn}</p>
                                    <div className="columns">
                                        <div className="left">{loadedBlog.column1}</div>
                                        <div className="right">{loadedBlog.column2}</div>
                                    </div>
                                </div>
                                <div className="flex-block">
                                    <div className="tags">
                                        <span>TAGS: </span>
                                        <span>{loadedBlog.tag}</span>
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
                                            {comments.map((item, index) => {
                                                return (
                                                    <CommentItem comment={item} key={index} />
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
                            </>
                        )

                    }}
                </Await>
            </Suspense>
        </section>
    )
}


export default BlogSingal
