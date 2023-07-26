import React from 'react'
import './News.css'
import SectionHeader from '../../../../common/SectioHeader/SectionHeader'
import { news } from '../../../../data'
import { Link } from 'react-router-dom'
import BlogComponent from '../../../../common/BlogComponent/BlogComponent'

const News = () => {
    return (
        <section className='news-section'>
            <SectionHeader text={'Latest News'} />
            <div className="news-section-inner container">
                {news.map(item => {
                    return <BlogComponent item={item} />
                })}
            </div>
        </section>
    )
}

export default News
