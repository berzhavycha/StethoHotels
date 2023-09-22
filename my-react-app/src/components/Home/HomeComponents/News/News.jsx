import React from 'react'
import { useSelector } from 'react-redux'

import SectionHeader from '../../../../common/SectioHeader/SectionHeader'
import BlogComponent from '../../../../common/BlogComponent/BlogComponent'
import { selectBlogsIds, useGetBlogsQuery } from '../../../../features/blogsSlice'

import './News.css'
const News = () => {
    const { } = useGetBlogsQuery()
    const blogsIds = useSelector(selectBlogsIds)

    return (
        <section className='news-section'>
            <SectionHeader text={'Latest News'} />
            <div className="news-section-inner container">
                {blogsIds.slice(0, 3).map(id => {
                    return <BlogComponent id={id} key={id} />
                })}
            </div>
        </section>
    )
}

export default News
