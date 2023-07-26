import React from 'react'
import { Link } from 'react-router-dom'
import './BlogComponent.css'
import {months} from '../../data'

const BlogComponent = ({ item }) => {

    const dateParts = item.date.split('.')
    const date = `${months[+dateParts[1] - 1]} ${dateParts[0]}, ${dateParts[2]}`

    return (
        <Link to={item.id} state={{page: "Blog Singal"}} className='blog-item'>
            <div className="blog-item-content">
                <div className="blog-image">
                    <img src={item.imageUrl} />
                </div>
                <div className="blog-info">
                    <div className="blog-info-top">
                        <span className='time'>{date}</span>
                        <span className='type'>{item.type}</span>
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
