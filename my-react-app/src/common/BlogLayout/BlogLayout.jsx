import React, { Suspense, useState } from 'react'
import { Outlet, defer, Await, useLoaderData, Link, useSearchParams, Form } from 'react-router-dom'
import { getReducedData } from '../../data'
import Loading from '../Loading/Loading'
import './BlogLayout.css'
import NotFound from '../NotFound/NotFound'
// import { setupStore } from '../../app/store'
import { store } from '../../app/store'
import { apiSlice } from '../../api/apiSlice'
import { useEffect } from 'react'
import { useMemo } from 'react'


export const loader = ({ request }) => {
    const response = store.dispatch(apiSlice.endpoints.getBlogs.initiate())
    return defer({ blogs: response })

    // if (title) {
    //     return defer({ blogs: getSearchItems('blogs', title) })
    // }
    // return defer({ blogs: getItems('blogs') })
}


const BlogLayout = () => {
    const blogsPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const [emptySearch, setEmptySearch] = useState(false)
    const [search, setSearch] = useState('')


    const genSearchParams = (key, value) => {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }

        return `?${sp.toString()}`
    }


    const filterArrayByParams = (inputEntities, params) => {
        const filterType = searchParams.get(params)
        let resultEntities = {}


        if (filterType) {
            for (let [key, value] of Object.entries(inputEntities)) {
                if (value.type === filterType) {
                    resultEntities = {
                        ...resultEntities,
                        [key]: value
                    }
                }
            }
        }

        return filterType ? resultEntities : inputEntities
    }


    const sortBlogsByDate = (blogs) => {
        return [...blogs].sort((a, b) => {
            const date1Parts = a.date.split('.');
            const date2Parts = b.date.split('.');

            const date1 = new Date(`${date1Parts[2]}-${date1Parts[1]}-${date1Parts[0]}`);
            const date2 = new Date(`${date2Parts[2]}-${date2Parts[1]}-${date2Parts[0]}`);

            return date2 - date1;
        }).splice(0, 3);
    };

    return (
        <section className='blog-layout'>
            <div className="blog-layout-inner container">
                <Suspense fallback={<Loading />}>
                    <Await resolve={blogsPromise.blogs}>
                        {(loadedBlogs) => {

                            const categories = getReducedData(Object.values(loadedBlogs.data.entities), 'type')
                            const tags = getReducedData(Object.values(loadedBlogs.data.entities), 'tag')
                            const recentPost = sortBlogsByDate(Object.values(loadedBlogs.data.entities))


                            let filteredPostsIds = useMemo(() => {
                                let filteredPosts = filterArrayByParams(loadedBlogs.data.entities, 'category')
                                filteredPosts = filterArrayByParams(filteredPosts, 'tag')

                                if (!search) return Object.keys(filteredPosts)

                                let idsArr = Object.keys(filteredPosts)
                                    .filter(id => filteredPosts[id].title.toLowerCase().startsWith(search.toLowerCase()))

                                return idsArr

                            }, [searchParams.get('category'), searchParams.get('tag'), search])

                            console.log(filteredPostsIds)

                            useEffect(() => {
                                if (!Object.keys(filteredPostsIds).length) setEmptySearch(true)
                                else setEmptySearch(false)
                            }, [filteredPostsIds])


                            return (
                                <>
                                    <div className="layout-content">
                                        {emptySearch ?
                                            <NotFound />
                                            :
                                            <Outlet context={{ blogsIds: filteredPostsIds }} />
                                        }
                                    </div>
                                    <div className="layout-article">
                                        <Form className="search">
                                            <input
                                                name='title'
                                                placeholder='Search...'
                                                type="search"
                                                onChange={e => setSearch(e.target.value)}
                                            />
                                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </Form>
                                        <div>
                                            <h1 className='layout-title'>Categories</h1>
                                            <div className="categories">
                                                <Link
                                                    state={{ page: 'Blog' }}
                                                    to={genSearchParams('category', null)}
                                                >
                                                    <i class="fa-solid fa-circle-dot"></i> All
                                                </Link>
                                                {categories.map((item, index) => {
                                                    return <Link
                                                        state={{ page: 'Blog' }}
                                                        to={genSearchParams('category', item)}
                                                        key={index}
                                                    >
                                                        <i class="fa-solid fa-circle-dot"></i> {item}
                                                    </Link>
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
