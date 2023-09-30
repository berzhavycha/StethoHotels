import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDropdownContext } from '../../context/Dropdown/DropdownProvider';

import './Navbar.css';

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

    const renderNavLink = ({ to, text, isRelative, onMouseOver }) => {
        const linkClass = ({ isActive }) => {
            const isRelativeClassName = isRelative ? 'relative-link' : ''
            return isActive ? isRelativeClassName + ' active' : isRelativeClassName
        }
        
        return (
            <NavLink
                to={to}
                className={linkClass}
                onMouseOver={isRelative ? onMouseOver : null}
            >
                {text}
            </NavLink>
        );
    };

    const navLinks = [
        { to: '/', text: 'home' },
        { to: 'about', text: 'about us' },
        { to: 'gallery', text: 'gallery' },
        { to: 'destinations', text: 'destinations', isRelative: true },
        { to: 'blog', text: 'blog' },
        { to: 'pages', text: 'pages', isRelative: true, onMouseOver: displayDropdown },
        { to: 'contactus', text: 'contact us' },
    ];

    return (
        <div className='top-navbar'>
            <div className="top-navbar-inner container">
                <button className="burger-menu" onClick={toggleDisplayMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <nav className={`navbar ${isMenuOpen && 'open'}`} onMouseOver={handleMouseOver}>
                    {navLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            {renderNavLink(link)}
                        </React.Fragment>
                    ))}
                </nav>
                <div className="sign-block">
                    <NavLink
                        to='login'
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        to='register'
                        className={({ isActive }) => isActive ? 'active' : ''}
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
