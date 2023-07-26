import React from 'react'
import TopNavbar from './TopNavbar'
import './Navbar.css';
import BottomNavbar from './BottomNavbar';
import Dropdown from './Dropdown';
import { useDropdownContext } from '../../context/DropdownProvider';

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
