import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BlogComponent.css'
import { months } from '../../data'
import { useSelector } from 'react-redux'
import { selectBlogById, useGetBlogsQuery } from '../../features/blogsSlice'

const BlogComponent = ({ id }) => {
    console.log(id)
    const item = useSelector(state => selectBlogById(state, id))
   
    const location = useLocation()

    let pathname = `${item.id}`
    if (!location.pathname.includes('blog')) {
        pathname = `/blog/${item.id}`
    }

    const dateParts = item.date.split('.')
    const date = `${months[+dateParts[1] - 1]} ${dateParts[0]}, ${dateParts[2]}`

    return (
        <Link to={pathname} state={{ page: "Blog Singal" }} className='blog-item'>
            <div className="blog-item-content">
                <div className="blog-image">
                    <img src={item.imageUrl} />
                </div>
                <div className="blog-info">
                    <div className="blog-info-top">
                        <span className='time'>{date}</span>
                        <span data-testid={item.type} className='type'>{item.type}</span>
                    </div>
                    <p className="blog-title">{item.title}</p>
                    <p className="blog-text">{item.text}</p>
                </div>
            </div>
            <a className='read-more'>READ MORE</a>
        </Link>
    )
}

export default BlogComponent
