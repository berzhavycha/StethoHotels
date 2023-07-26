import React from 'react'
import TopNavbar from './TopNavbar'
import './Navbar.css';
import BottomNavbar from './BottomNavbar';
import Dropdown from './Dropdown';

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
