import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useDropdownContext } from '../../context/Dropdown/DropdownProvider'

import './Navbar.css'

const Dropdown = () => {
    const { page, location, isDropdownOpen, isMenuOpen } = useDropdownContext()
    const dropdownRef = useRef()

    useEffect(() => {
        const { x, y } = location
        dropdownRef.current.style.left = `${x}px`
        const yOffset = window.innerWidth < 1000 ? 45 : 50;
        dropdownRef.current.style.top = isMenuOpen ? `${y}px` : `${y + yOffset}px`
    }, [location])

    return (
        <nav ref={dropdownRef} className={`dropdown-menu ${isDropdownOpen && 'open'}`}>
            {page.dropdownLinks.map((item, index) => {
                return <Link key={index} state={{ page: item.state }} to={item.to}>{item.title}</Link>
            })}
        </nav>
    )
}

export default Dropdown
