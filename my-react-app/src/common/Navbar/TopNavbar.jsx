import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import Dropdown from './Dropdown';
import { useDropdownContext } from '../../context/Dropdown/DropdownProvider';

const TopNavbar = () => {

    const { openDropdown, closeDropdown, isMenuOpen, toggleDisplayMenu } = useDropdownContext()

    const displayDropdown = e => {
        let coords = {
            x: e.target.getBoundingClientRect().left,
            y: e.target.getBoundingClientRect().top
        }

        if (isMenuOpen) {
            coords = {
                x: e.target.getBoundingClientRect().left + 300,
                y: e.target.getBoundingClientRect().top
            }
        }

        openDropdown(e.target.textContent, coords)
    }

    const handleMouseOver = e => {
        if (!e.target.classList.contains('relative-link')) {
            closeDropdown()
        }
    }

    return (
        <div className='top-navbar'>
            <div className="top-navbar-inner container">
                <button className="burger-menu" onClick={toggleDisplayMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <nav className={`navbar ${isMenuOpen && 'open'}`} onMouseOver={handleMouseOver}>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        home
                    </NavLink>
                    <NavLink
                        to='about'
                        state={{ page: 'About Us' }}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        about us
                    </NavLink>
                    <NavLink
                        to='gallery'
                        state={{ page: 'Gallery' }}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        gallery
                    </NavLink>
                    <NavLink
                        to='destinations'
                        state={{ page: 'Destinations' }}
                        className={({ isActive }) => isActive ? 'relative-link active' : 'relative-link'}
                    >
                        destinations
                    </NavLink>
                    <NavLink
                        to='blog'
                        state={{ page: 'Blog' }}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        blog
                    </NavLink>
                    <NavLink
                        to='pages'
                        className={({ isActive }) => isActive ? 'relative-link active' : 'relative-link'}
                        onMouseOver={displayDropdown}
                    >
                        pages
                    </NavLink>
                    <NavLink
                        to='contact'
                        className={({ isActive }) => isActive ? ' active' : ''}
                    >
                        contact us
                    </NavLink>
                </nav>
                <div className="sign-block">
                    <NavLink
                        to='login'
                        className={({ isActive }) => isActive ? 'active' : ''}
                        state={{ page: 'Login' }}
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        to='register'
                        className={({ isActive }) => isActive ? 'active' : ''}
                        state={{page: 'Register'}}
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to='request'
                        className={({ isActive }) => isActive ? 'link-request active' : 'link-request'}
                    >
                        Request a Quote
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar
