import React, { Suspense, useState } from 'react'
import { Outlet, defer, Await, useLoaderData, Link, useSearchParams, Form, useSubmit } from 'react-router-dom'
import { getItems, getReducedData, delay, getSearchItems } from '../../data'
import Loading from '../Loading/Loading'
import './BlogLayout.css'
import NotFound from '../NotFound/NotFound'


export const loader = async ({ request }) => {
    const url = new URL(request.url)
    const title = url.searchParams.get("title")

    if (title) {
        return defer({ blogs: getSearchItems('blogs', title) })
    }
    return defer({ blogs: getItems('blogs') })
}

const BlogLayout = () => {
    const blogsPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const [emptySearch, setEmptySearch] = useState(false)
    const submit = useSubmit()

    const genSearchParams = (key, value) => {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }

        return `?${sp.toString()}`
    }

    const filterArrayByParams = (arr, params) => {
        const filterType = searchParams.get(params)
        return filterType ? arr.filter(item => item.type === filterType) : arr
    }

    return (
        <section className='blog-layout'>
            <div className="blog-layout-inner container">
                <Suspense fallback={<Loading />}>
                    <Await resolve={blogsPromise.blogs}>
                        {(loadedBlogs) => {

                            const categories = getReducedData(loadedBlogs, 'type')
                            const tags = getReducedData(loadedBlogs, 'tag')

                            const blogCopy = [...loadedBlogs]

                            const recentPost = blogCopy.sort((a, b) => {
                                const date1Parts = a.date.split('.');
                                const date2Parts = b.date.split('.');

                                const date1 = new Date(`${date1Parts[2]}-${date1Parts[1]}-${date1Parts[0]}`);
                                const date2 = new Date(`${date2Parts[2]}-${date2Parts[1]}-${date2Parts[0]}`);

                                return date2 - date1;
                            }).splice(0, 3);


                            let filterPosts = filterArrayByParams(loadedBlogs, 'category')
                            filterPosts = filterArrayByParams(filterPosts, 'tag')

                            if (!filterPosts.length) setEmptySearch(true)
                            else setEmptySearch(false)


                            return (
                                <>
                                    <div className="layout-content">
                                        {emptySearch ?
                                            <NotFound />
                                            :
                                            <Outlet context={{ blogs: filterPosts }} />
                                        }
                                    </div>
                                    <div className="layout-article">
                                        <Form className="search">
                                            <input
                                                name='title'
                                                placeholder='Search...'
                                                type="search"
                                                onChange={e => {
                                                    submit(e.currentTarget.form)
                                                }}
                                            />
                                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </Form>
                                        <div>
                                            <h1 className='layout-title'>Categories</h1>
                                            <div className="categories">
                                                <Link state={{ page: 'Blog' }} to={genSearchParams('category', null)}><i class="fa-solid fa-circle-dot"></i> All</Link>
                                                {categories.map((item, index) => {
                                                    return <Link state={{ page: 'Blog' }} to={genSearchParams('category', item)} key={index}><i class="fa-solid fa-circle-dot"></i> {item}</Link>
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className='layout-title'>Recent Posts</h1>
                                            <div className="recent-posts">
                                                {recentPost.map((item, index) => {
                                                    return (
                                                        <Link key={index} className="recent-post-item">
                                                            <img src={item.imageUrl} />
                                                            <div className="right">
                                                                <h3>{item.text.slice(0, 39)}.</h3>
                                                                <p>{item.date}</p>
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className='layout-title'>Tags</h1>
                                            <div className="tags">
                                                <Link state={{ page: 'Blog' }} to={genSearchParams('tag', null)}>All</Link>
                                                {tags.map((item, index) => {
                                                    return <Link state={{ page: 'Blog' }} to={genSearchParams('tag', item)} key={index}>{item}</Link>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }}
                    </Await>
                </Suspense>

            </div>
        </section>
    )
}

export default BlogLayout
