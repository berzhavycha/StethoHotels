import React from 'react'
import { useLocation, Outlet, Link } from 'react-router-dom'
import './HeaderLayout.css'

const HeaderLayout = () => {
    const location = useLocation()
    const page = location.state?.page || ''

    return (
        <>
            <header className='header-layout'>
                <div className="header-layout-shell">
                    <div className="container header-layout-inner">
                        <h1>{page}</h1>
                        <span><Link to='/' className='green'>Home</Link> / {page}</span>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default HeaderLayout
