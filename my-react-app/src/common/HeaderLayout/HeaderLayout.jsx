import React from 'react'
import { useLocation, Outlet, Link } from 'react-router-dom'

import './HeaderLayout.css'

const HeaderLayout = () => {
    const location = useLocation()
    let page = location.pathname.split('/')[1]

    if(page === 'hotels') page = 'Hotel Listing'
    else if(page === 'contactus') page = 'Contact Us'

    return (
        <>
            <header className='header-layout'>
                <div className="header-layout-shell">
                    <div className="container header-layout-inner">
                        <h1>{page[0].toUpperCase() + page.slice(1)}</h1>
                        <span><Link to='/' className='green'>Home</Link> / {page[0].toUpperCase() + page.slice(1)}</span>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default HeaderLayout
