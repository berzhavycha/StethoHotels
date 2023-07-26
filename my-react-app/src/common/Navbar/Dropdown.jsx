import React, { useEffect, useRef } from 'react'
import { dropdown } from '../../data'
import { Link } from 'react-router-dom'
import { useDropdownContext } from '../../context/Dropdown/DropdownProvider'
import './Navbar.css'

const Dropdown = () => {

    const { page, location, isDropdownOpen, isMenuOpen } = useDropdownContext()
    const dropdownRef = useRef()

    useEffect(() => {
        dropdownRef.current.style.left = location.x + 'px'
        dropdownRef.current.style.top = isMenuOpen ? location.y + 'px' : location.y + 55 + 'px'
    }, [location])

    return (
        <nav ref={dropdownRef} className={`dropdown-menu ${isDropdownOpen && 'open'}`}>
            {page.dropdownLinks.map(item => {
                return <Link state={{ page: item.state }} to={item.to}>{item.title}</Link>
            })}
        </nav>
    )
}

export default Dropdown
