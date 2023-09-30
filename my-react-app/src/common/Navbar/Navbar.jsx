import React from 'react'

import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'
import Dropdown from './Dropdown'

import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <TopNavbar />
            <BottomNavbar />
            <Dropdown />
        </header>
    )
}

export default Navbar
