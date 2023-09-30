import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { months } from '../../data'
import { selectBlogById } from '../../features/blogsSlice'

import './BlogComponent.css'

const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('.')
    const monthName = months[+month - 1]
    return `${monthName} ${day}, ${year}`
}

const BlogComponent = ({ id }) => {
    const item = useSelector((state) => selectBlogById(state, id));
    const location = useLocation();
    const blogPath = location.pathname.includes('blog') ? `${item.id}` : `/blog/${item.id}`;
    const formattedDate = formatDate(item.date);

    return (
        <Link data-testid='blog' to={blogPath} state={{ page: "Blog Singal" }} className='blog-item'>
            <div className="blog-item-content">
                <div className="blog-image">
                    <img src={item.imageUrl} />
                </div>
                <div className="blog-info">
                    <div className="blog-info-top">
                        <span className='time'>{formattedDate}</span>
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
