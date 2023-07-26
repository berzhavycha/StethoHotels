import React from 'react'
import { useOutletContext } from 'react-router-dom'
import BlogComponent from '../../common/BlogComponent/BlogComponent'
import './Blog.css'

const Blog = () => {

    const { blogs } = useOutletContext()

    return (
        <section className='blog-page'>
            {blogs.map((item, index) => {
                return <BlogComponent item={item} key={index}/>
            })}
        </section>
    )
}

export default Blog
