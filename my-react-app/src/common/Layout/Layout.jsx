import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useDropdownContext } from '../../context/Dropdown/DropdownProvider'

const Layout = () => {
    const { setIsMenuOpen } = useDropdownContext()

    const handleMobileNavbarClick = (e) => {
        if (!e.target.classList.contains('navbar') && !e.target.classList.contains('open') && !e.target.closest('.burger-menu')) {
            setIsMenuOpen(false)
        }
    }

    return (
        <div onClick={handleMobileNavbarClick}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
