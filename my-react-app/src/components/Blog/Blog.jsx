import React from 'react'
import { useOutletContext } from 'react-router-dom'

import BlogComponent from '../../common/BlogComponent/BlogComponent'

import './Blog.css'

const Blog = () => {

    const { blogsIds } = useOutletContext()

    return (
        <section className='blog-page'>
            {blogsIds?.map((id, index) => {
                return <BlogComponent id={id} key={index}/>
            })}
        </section>
    )
}

export default Blog
